import { client } from "@/database/client";
import { Player, PlayerSport } from "./types";

export class PlayerModel {
  static async getPlayers(dni?: number) {
    const data = dni
      ? await this.#selectPlayer(dni)
      : await this.#selectPlayers();
    return data;
  }

  static async existPlayer(dni: number) {
    const data = await this.#selectPlayer(dni);
    return Boolean(data.length);
  }

  static async createPlayer(playerData: Player, photo?: File) {
    const fileName = `${playerData.dni}_${playerData.name}_${playerData.lastname}`;
    if (photo) {
      await this.#uploadPhoto(fileName, photo);
    }
    const { id } = await this.#insertPlayer(playerData);
    return { id };
  }

  static async createPlayerSport(playerSportsData: PlayerSport[]) {
    const { error } = await client
      .from("players_sports")
      .insert([...playerSportsData]);
    if (error) throw new Error(error.message);
  }

  static async #selectPlayers() {
    const { data, error } = await client.from("players").select("*");
    if (error) throw new Error(error.message);
    return data;
  }
  static async #selectPlayer(dni: number) {
    const { data, error } = await client
      .from("players")
      .select("*")
      .eq("dni", dni);
    if (error) throw new Error(error.message);
    return data;
  }

  static async #insertPlayer(playerData: Player) {
    const { data, error } = await client
      .from("players")
      .insert(playerData)
      .select("id")
      .limit(1)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  static async #uploadPhoto(fileName: string, photo: File) {
    const { data, error } = await client.storage
      .from("players")
      .upload(`public/${fileName}`, photo);
    if (error) throw new Error(error.message);
    return data;
  }
}
