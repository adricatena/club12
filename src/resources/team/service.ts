import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import { uploadPhoto } from "../helper";
import { PlayerFromDb } from "../player/types";
import type { Return } from "../types";
import { getTeamFilename } from "./helper";
import type { NewTeam, TeamFromDb, UpdateTeam } from "./types";

const TeamService = {
  async getTeams(
    client: SupabaseClient<Database>,
    { sport_id }: { sport_id?: string },
  ): Promise<Return & { data: TeamFromDb[] | null }> {
    const baseQuery = client.from("teams").select();
    const { data, error } = sport_id
      ? await baseQuery.eq("sport_id", sport_id)
      : await baseQuery;
    if (error) return { ok: false, message: error.message, data: null };
    return { ok: true, message: "Se encontraron equipos", data };
  },
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
  async updateTeam(
    client: SupabaseClient<Database>,
    data: { newData: UpdateTeam; oldData: { players: PlayerFromDb[] } },
  ): Promise<Return> {
    const { id, name, active, photo, photoSrc, sport, players } = data.newData;
    const { players: oldPlayers } = data.oldData;

    const { error } = await client
      .from("teams")
      .update({ name, active })
      .eq("id", id);
    if (error) return { ok: false, message: error.message };

    const filename = getTeamFilename(sport.name, name);
    if (photo) {
      await uploadPhoto({ client, filename, photo, bucket: "teams" });
    } else if (!photoSrc) {
      await client.storage.from("teams").remove([filename]);
    }

    if (!oldPlayers.length) {
      const { error } = await client
        .from("players_teams")
        .insert(
          players.map((player) => ({ player_id: player.id, team_id: id })),
        );
      if (error) return { ok: false, message: error.message };
    } else {
      const newPlayers = players.filter((player) => {
        const playerIsAlreadyInTeam = oldPlayers.some(
          (oldPlayer) => oldPlayer.id === player.id,
        );
        return !playerIsAlreadyInTeam;
      });
      if (newPlayers.length) {
        const { error } = await client
          .from("players_teams")
          .insert(
            newPlayers.map((player) => ({ player_id: player.id, team_id: id })),
          );
        if (error) return { ok: false, message: error.message };
      }

      const playersToRemove = oldPlayers.filter((oldPlayer) => {
        const playerIsStillInTeam = players.some(
          (player) => player.id === oldPlayer.id,
        );
        return !playerIsStillInTeam;
      });
      if (playersToRemove.length) {
        for (const playerToRemove of playersToRemove) {
          const { error } = await client
            .from("players_teams")
            .delete()
            .eq("player_id", playerToRemove.id);
          if (error) return { ok: false, message: error.message };
        }
      }
    }

    return { ok: true, message: "Equipo modificado correctamente" };
  },

  async getPlayerByTeam(
    client: SupabaseClient<Database>,
    teamId: string,
  ): Promise<Return & { data: PlayerFromDb[] | null }> {
    const { data, error } = await client
      .from("players_teams")
      .select("player_id")
      .eq("team_id", teamId);

    if (error) {
      return { ok: false, message: error.message, data: null };
    }

    const playerIds = data.map((player) => player.player_id);

    if (playerIds.length === 0) {
      // No hay jugadores asociados al equipo
      return {
        ok: true,
        message: "No hay jugadores asociados al equipo",
        data: [],
      };
    }

    const { data: playersData, error: playersError } = await client
      .from("players")
      .select()
      .in("id", playerIds);
    if (playersError) {
      return { ok: false, message: playersError.message, data: null };
    }

    return { ok: true, message: "Se encontraron jugadores", data: playersData };
  },

  getTeamPhotoUrl(
    client: SupabaseClient<Database>,
    sportId: string,
    teamName: string,
  ) {
    const fileName = getTeamFilename(sportId, teamName);
    const { data } = client.storage.from("teams").getPublicUrl(fileName);

    return { ok: true, message: "", data: data.publicUrl };
  },
};

export default TeamService;
