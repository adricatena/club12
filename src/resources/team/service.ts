import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import { uploadPhoto } from "../helper";
import type { Return } from "../types";
import { getTeamFilename } from "./helper";
import type { NewTeam } from "./types";

const TeamService = {
  async createTeam(
    client: SupabaseClient<Database>,
    data: NewTeam,
  ): Promise<Return> {
    const { name, sport, photo, players } = data;
    // Chequeamos si el equipo  existe
    const { data: teamExist, error: teamExistError } = await client
      .from("teams")
      .select("id")
      .match({ name, sport_id: sport.id });
    if (teamExistError) return { ok: false, message: teamExistError.message };
    if (teamExist.length)
      return {
        ok: false,
        message: `El equipo de ${sport.name}, ${name} ya existe!`,
      };
    // Si tiene foto la guardamos
    if (photo) {
      const filename = getTeamFilename(sport.name, name);
      const { error } = await uploadPhoto({
        client,
        filename,
        photo,
        bucket: "teams",
      });
      if (error) return { ok: false, message: error.message };
    }
    // Creamos el equipo
    const { data: insertedTeamData, error } = await client
      .from("teams")
      .insert({ name, sport_id: sport.id })
      .select("id");
    if (error) return { ok: false, message: error.message };
    // Si tiene jugadores los agregamos
    if (players.length) {
      const formattedPlayers = players.map(({ id }) => ({
        player_id: id,
        team_id: insertedTeamData[0].id,
      }));
      const { error } = await client
        .from("players_teams")
        .insert(formattedPlayers);
      if (error) return { ok: false, message: error.message };
    }

    return { ok: true, message: "Equipo creado correctamente" };
  },
  async updateTeam(client: SupabaseClient<Database>) {},
};
/* async updatePlayer(
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
    const { data: updatedPlayerData, error } = await client
      .from("players")
      .update({
        active: data.active,
        birthdate: data.birthdate,
        cellphone: data.cellphone,
        dni: Number(data.dni),
        email: data.email,
        lastname: data.lastname,
        name: data.name,
        observations: data.observations,
      })
      .eq("dni", data.dni)
      .select("id");
    if (error) return { ok: false, message: error.message };

    // actualizar tabla player_sport
    const { activeSports, federatedSports, dni, name, lastname } = data;
    const { playerSports: oldPlayerSports } = oldData;
    const player_id = updatedPlayerData[0].id;
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
  }, */

export default TeamService;
