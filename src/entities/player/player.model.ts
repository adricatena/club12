import { client } from "@/database/client";
import { Player, PlayerSport } from "./types";

export class PlayerModel {
  static async createPlayer(playerData: Player, photo?: File) {
    const fileName = `${playerData.dni}_${playerData.name}_${playerData.lastname}`;
    if (photo) {
      await this.#uploadPhoto(fileName, photo);
    }
    const { id } = await this.#insertPlayer(playerData);
    return { id };
  }

  static async createPlayerSport(playerSportData: PlayerSport[]) {
    const { data, error } = await client
      .from("players_sports")
      .insert(playerSportData)
      .select()
      .limit(1)
      .single();
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
