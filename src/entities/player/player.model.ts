import type { Database } from "@/database/types";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Player, PlayerSport } from "./player.types";

export class PlayerModel {
  client: SupabaseClient<Database>;
  constructor(client: SupabaseClient<Database>) {
    this.client = client;
  }

  async getPlayers(dni?: number) {
    const data = dni
      ? await this.#selectPlayer(dni)
      : await this.#selectPlayers();
    return data;
  }

  async existPlayer(dni: number) {
    const data = await this.#selectPlayer(dni);
    return Boolean(data.length);
  }

  async createPlayer(playerData: Player, photo?: File) {
    const fileName = `${playerData.dni}_${playerData.name}_${playerData.lastname}`;
    if (photo) {
      await this.#uploadPhoto(fileName, photo);
    }
    const { id } = await this.#insertPlayer(playerData);
    return { id };
  }

  async createPlayerSport(playerSportsData: PlayerSport[]) {
    const { error } = await this.client
      .from("players_sports")
      .insert([...playerSportsData]);
    if (error) throw new Error(error.message);
  }

  async #selectPlayers() {
    const { data, error } = await this.client.from("players").select("*");
    if (error) throw new Error(error.message);
    return data;
  }
  async #selectPlayer(dni: number) {
    const { data, error } = await this.client
      .from("players")
      .select("*")
      .eq("dni", dni);
    if (error) throw new Error(error.message);
    return data;
  }

  async #insertPlayer(playerData: Player) {
    const { data, error } = await this.client
      .from("players")
      .insert(playerData)
      .select("id")
      .limit(1)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async #uploadPhoto(fileName: string, photo: File) {
    const { data, error } = await this.client.storage
      .from("players")
      .upload(`public/${fileName}`, photo);
    if (error) throw new Error(error.message);
    return data;
  }
}
