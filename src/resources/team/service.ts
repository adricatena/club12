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
      .from("team")
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
};

export default TeamService;
