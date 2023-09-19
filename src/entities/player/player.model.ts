import type { Database } from "@/database/types";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createFileName } from "./player.helper";
import type { Player, PlayerSport, PlayerSportFromDb } from "./player.types";

export class PlayerModel {
  client: SupabaseClient<Database>;
  constructor(client: SupabaseClient<Database>) {
    this.client = client;
  }

  async getPlayers() {
    const { data, error } = await this.client.from("players").select("*");
    if (error) throw new Error(error.message);
    return data;
  }

  async getPlayer(dni: number) {
    const { data, error } = await this.client
      .from("players")
      .select("*")
      .eq("dni", dni)
      .limit(1);
    if (error) throw new Error(error.message);
    return data[0];
  }

  getPlayerPhotoUrl(fileName: string) {
    const {
      data: { publicUrl },
    } = this.client.storage.from("players").getPublicUrl(`public/${fileName}`);
    return publicUrl;
  }

  async getPlayerSports(id: string) {
    const { data, error } = await this.client
      .from("players_sports")
      .select("federated , sports(name)")
      .eq("player_id", id);
    if (error) throw new Error(error.message);
    const filteredSports: PlayerSportFromDb[] = [];
    data.forEach((sport) => {
      if (sport.sports?.name) {
        filteredSports.push({
          federated: sport.federated,
          name: sport.sports.name,
        });
      }
    });
    return filteredSports;
  }

  async createPlayer(playerData: Player, photo?: File) {
    const fileName = createFileName(
      playerData.dni.toString(10),
      playerData.name,
      playerData.lastname,
    );
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
