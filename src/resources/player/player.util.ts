import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import type { SportFromDb } from "../sport/sport";
import type { Return } from "../types";
import type {
  NewPlayer,
  PlayerFromDb,
  PlayerSportFromDb,
  UpdatePlayer,
} from "./player";
import { createFileName } from "./player.helper";

export async function getPlayer(
  client: SupabaseClient<Database>,
  dni: string,
): Promise<Return & { data: PlayerFromDb | null }> {
  const { data, error } = await client.from("players").select().eq("dni", dni);
  return error
    ? { ok: false, message: error.message, data: null }
    : { ok: true, message: "Se encontro un jugador", data: data[0] };
}

export async function getPlayers(
  client: SupabaseClient<Database>,
): Promise<Return & { data: PlayerFromDb[] | null }> {
  const { data, error } = await client.from("players").select();
  return error
    ? { ok: false, message: error.message, data: null }
    : { ok: true, message: "", data };
}

export function getPlayerPhotoUrl(
  client: SupabaseClient<Database>,
  dni: string,
  name: string,
  lastname: string,
) {
  const fileName = createFileName(dni, name, lastname);
  const { data } = client.storage.from("players").getPublicUrl(fileName);
  return { ok: true, message: "", data: data.publicUrl };
}

export async function getPlayerSports(
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
}

export async function createPlayer(
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
  if (playerExistError) return { ok: false, message: playerExistError.message };
  if (playerExist.length)
    return {
      ok: false,
      message: `El jugador con DNI ${dni} ya existe!`,
    };
  // Si tiene foto la guardamos
  if (photo) {
    const fileName = createFileName(dni, name, lastname);
    const { error } = await client.storage
      .from("players")
      .upload(fileName, photo);
    if (error) return { ok: false, message: error.message };
  }
  // Creamos el jugador
  const { data: insertedPlayerData, error } = await client
    .from("players")
    .insert({ birthdate, cellphone, dni: Number(dni), email, lastname, name })
    .select("id");
  if (error) return { ok: false, message: error.message };
  // Si tiene deportes activos los agregamos
  if (activeSports.length) {
    const playerSports = activeSports.map((sport) => {
      const sport_id = sportsFromDb.find(
        (sportFromDb) => sportFromDb.name === sport,
      )!.id;
      const federated = Boolean(
        federatedSports.find((federatedSport) => federatedSport === sport),
      );
      return {
        player_id: insertedPlayerData[0].id,
        sport_id,
        federated,
      };
    });
    const { error } = await client.from("players_sports").insert(playerSports);
    if (error) return { ok: false, message: error.message };
  }

  return { ok: true, message: "Jugador creado correctamente" };
}

export async function updatePlayer(
  client: SupabaseClient<Database>,
  data: UpdatePlayer,
): Promise<Return> {
  // 1- separar data para las diferentes tablas (player, player_sport, players_teams) y archivo
  // 2- actualizar tabla players
  const playerData = {
    active: data.active,
    birthdate: data.birthdate,
    cellphone: data.cellphone,
    dni: Number(data.dni),
    email: data.email,
    lastname: data.lastname,
    name: data.name,
    observations: data.observations,
  };
  const { data: updatedPlayerData, error } = await client
    .from("players")
    .update(playerData)
    .eq("dni", playerData.dni);
  if (error) return { ok: false, message: error.message };

  // 3- actualizar tabla player_sport
  // 4- actualizar tabla player_teams si el jugador se deshabilito de un deporte
  // 5- actualizar foto si es que cambio
  return { ok: false, message: "" };
}
