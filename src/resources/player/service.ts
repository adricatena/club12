import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import { uploadPhoto } from "../helper";
import type { SportFromDb } from "../sport/types";
import type { Return } from "../types";
import { getPlayerFilename, insertPlayerSports } from "./helper";
import type {
  NewPlayer,
  PlayerFromDb,
  PlayerSportFromDb,
  UpdatePlayer,
} from "./types";

const PlayerService = {
  async getPlayer(
    client: SupabaseClient<Database>,
    dni: string | number,
  ): Promise<Return & { data: PlayerFromDb | null }> {
    const { data, error } = await client
      .from("players")
      .select()
      .eq("dni", dni);
    return error
      ? { ok: false, message: error.message, data: null }
      : { ok: true, message: "Se encontro un jugador", data: data[0] };
  },
  async getTotalPlayers(
    client: SupabaseClient<Database>,
  ): Promise<Return & { data: number }> {
    const { count, error } = await client
      .from("players")
      .select("id", { count: "exact", head: true });

    return error
      ? { ok: false, message: error.message, data: 0 }
      : {
          ok: true,
          message: "Cantidad total de jugadores obtenida",
          data: count ?? 0,
        };
  },
  async getPlayers(
    client: SupabaseClient<Database>,
    { page = -1, amount = Infinity }: { page?: number; amount?: number } = {},
  ): Promise<Return & { data: PlayerFromDb[] | null }> {
    if (page === -1 || amount === Infinity) {
      const { data, error } = await client.from("players").select();

      return error
        ? { ok: false, message: error.message, data: null }
        : { ok: true, message: "", data };
    }

    const from = amount * page;
    const to = amount * (page + 1) - 1;
    const { data, error } = await client
      .from("players")
      .select()
      .range(from, to);

    return error
      ? { ok: false, message: error.message, data: null }
      : { ok: true, message: "", data };
  },
  async searchPlayers(
    client: SupabaseClient<Database>,
    { dni }: { dni: string },
  ) {
    const { data, error } = await client
      .from("players")
      .select()
      .like("dni", `%${dni}%`);
    return error
      ? { ok: false, message: error.message, data: null }
      : { ok: true, message: "", data };
  },
  getPlayerPhotoUrl(
    client: SupabaseClient<Database>,
    dni: string | number,
    name: string,
    lastname: string,
  ) {
    const fileName = getPlayerFilename(dni, name, lastname);
    const { data } = client.storage.from("players").getPublicUrl(fileName);
    return { ok: true, message: "", data: data.publicUrl };
  },
  async getPlayerSports(
    client: SupabaseClient<Database>,
    id: string,
  ): Promise<Return & { data: PlayerSportFromDb[] | null }> {
    const { data: playerSports, error } = await client
      .from("players_sports")
      .select("federated , sports(name, id)")
      .eq("player_id", id);
    if (error) return { ok: false, message: error.message, data: null };

    const mappedPlayerSports = playerSports.map<PlayerSportFromDb>(
      (playerSport) => ({
        federated: playerSport.federated,
        name: playerSport.sports!.name,
        id: playerSport.sports!.id,
      }),
    );
    return { ok: true, message: "", data: mappedPlayerSports };
  },
  async getPlayersSport(
    client: SupabaseClient<Database>,
    {
      sport_id,
      free_agents = true,
    }: { sport_id: string; free_agents?: boolean },
  ): Promise<Return & { data: PlayerFromDb[] | null }> {
    // Buscamos los jugadores que esten activos en ese deporte
    const { data: allPlayersWithSport } = await client
      .from("players")
      .select("*, players_sports!inner(sport_id)")
      .eq("players_sports.sport_id", sport_id);

    let playersWithSport;
    if (free_agents) {
      // Buscamos los jugadores activos en el deporte y con equipos asignados
      const { data: playersWithSportAndTeam } = await client
        .from("players_teams")
        .select("player_id, teams!inner(sport_id)")
        .eq("teams.sport_id", sport_id);

      // Filtramos los jugadores que estan activos y no estan asignados a ningun equipo
      playersWithSport =
        allPlayersWithSport?.filter((playerWithSport) => {
          const playerHasTeam = playersWithSportAndTeam?.some(
            (playerWithSportAndTeam) =>
              playerWithSportAndTeam.player_id === playerWithSport.id,
          ); // si el id del jugador esta dentro del arreglo de los jugadores con equipo, tiene equipo
          return !playerHasTeam; // si no tiene equipo, lo devolvemos
        }) ?? [];
    } else playersWithSport = allPlayersWithSport ?? [];

    // formateamos los datos para devolver solo lo necesario
    const mappedPlayersSport = playersWithSport.map(
      ({ players_sports, ...restOfPlayerData }) => restOfPlayerData,
    );
    return {
      ok: true,
      message: "Jugadores encontrados",
      data: mappedPlayersSport ?? [],
    };
  },
  async createPlayer(
    client: SupabaseClient<Database>,
    {
      birthdate,
      cellphone,
      dni,
      email,
      lastname,
      name,
      photo,
      activeSports,
      federatedSports,
    }: NewPlayer,
    sportsFromDb: SportFromDb[],
  ): Promise<Return> {
    // Chequeamos si el jugador ya existe
    const { data: playerExist, error: playerExistError } = await client
      .from("players")
      .select()
      .eq("dni", dni);
    if (playerExistError)
      return { ok: false, message: playerExistError.message };
    if (playerExist.length)
      return {
        ok: false,
        message: `El jugador con DNI ${dni} ya existe!`,
      };
    // Si tiene foto la guardamos
    if (photo) {
      const filename = getPlayerFilename(dni, name, lastname);
      const { error } = await uploadPhoto({
        client,
        filename,
        photo,
        bucket: "players",
      });
      if (error) return { ok: false, message: error.message };
    }
    // Creamos el jugador
    const { data: insertedPlayerData, error } = await client
      .from("players")
      .insert({ birthdate, cellphone, dni, email, lastname, name })
      .select("id");
    if (error) return { ok: false, message: error.message };
    // Si tiene deportes activos los agregamos
    if (activeSports.length) {
      const { error } = await insertPlayerSports({
        client,
        activeSports,
        federatedSports,
        sportsFromDb,
        player_id: insertedPlayerData[0].id,
      });
      if (error) return { ok: false, message: error.message };
    }

    return { ok: true, message: "Jugador creado correctamente" };
  },
  async updatePlayer(
    client: SupabaseClient<Database>,
    {
      data,
      oldData,
      sportsFromDb,
    }: {
      data: UpdatePlayer;
      oldData: {
        playerSports: PlayerSportFromDb[] | null;
      };
      sportsFromDb: SportFromDb[];
    },
  ): Promise<Return> {
    // actualizar tabla players
    const { error } = await client
      .from("players")
      .update({
        active: data.active,
        birthdate: data.birthdate,
        cellphone: data.cellphone,
        dni: data.dni,
        email: data.email,
        lastname: data.lastname,
        name: data.name,
        observations: data.observations,
      })
      .eq("id", data.id);
    if (error) return { ok: false, message: error.message };

    // actualizar tabla player_sport
    const { activeSports, federatedSports, dni, name, lastname } = data;
    const { playerSports: oldPlayerSports } = oldData;
    const { id: player_id } = data;
    // si no tenia deportes activos previamente directamente agregamos los nuevos
    if (!oldPlayerSports || !oldPlayerSports.length) {
      const { error } = await insertPlayerSports({
        client,
        activeSports,
        federatedSports,
        sportsFromDb,
        player_id,
      });
      if (error) return { ok: false, message: error.message };
    } else {
      // obtenemos nuevos deportes activos (si es que hay)
      const newActivesSportsNames = activeSports.filter((playerSportName) => {
        const alreadyActiveSport = oldPlayerSports.some(
          (oldPlayerSport) => oldPlayerSport.name === playerSportName,
        );
        return !alreadyActiveSport;
      });
      // guardamos nuevos deportes activos (si es que hay)
      if (newActivesSportsNames.length) {
        const { error } = await insertPlayerSports({
          client,
          activeSports: newActivesSportsNames,
          federatedSports,
          sportsFromDb,
          player_id,
        });
        if (error) return { ok: false, message: error.message };
      }

      // obtenemos y eliminamos deportes activos a eliminar (si es que hay)
      for (const oldPlayerSport of oldPlayerSports) {
        const alreadyActiveSport = activeSports.some(
          (activeSport) => activeSport === oldPlayerSport.name,
        );
        if (!alreadyActiveSport) {
          const { id: playerSportIdToDelete } = oldPlayerSport;
          // obtenemos de la base si el jugador pertenece a un equipo del deporte a eliminar
          const { data: playerTeamToDelete } = await client
            .from("players_teams")
            .select("team_id, teams!inner(sport_id)")
            .eq("player_id", player_id)
            .eq("teams.sport_id", playerSportIdToDelete);
          if (playerTeamToDelete) {
            // si tiene algun equipo de ese deporte lo borramos
            await client
              .from("players_teams")
              .delete()
              .eq("player_id", player_id)
              .eq("team_id", playerTeamToDelete[0].team_id);
          }
          // borramos el deporte del jugador
          await client
            .from("players_sports")
            .delete()
            .eq("player_id", player_id)
            .eq("sport_id", playerSportIdToDelete);
        }
        // comparamos los nuevos deportes federados con los que ya estaban guardados
        const nowIsFederated = federatedSports.includes(oldPlayerSport.name);
        if (nowIsFederated !== oldPlayerSport.federated) {
          await client
            .from("players_sports")
            .update({
              federated: nowIsFederated,
            })
            .eq("player_id", player_id)
            .eq("sport_id", oldPlayerSport.id);
        }
      }
    }
    // actualizar foto si es que cambio
    const { photo, photoSrc } = data;
    if (photo) {
      const filename = getPlayerFilename(dni, name, lastname);
      await uploadPhoto({ client, filename, photo, bucket: "players" });
    } else if (!photoSrc) {
      const fileName = getPlayerFilename(data.dni, data.name, data.lastname);
      await client.storage.from("players").remove([fileName]);
    }
    return {
      ok: true,
      message: `El jugador ${data.name} ${data.lastname} con DNI ${data.dni} se modifico correctamente!`,
    };
  },
};

export default PlayerService;
