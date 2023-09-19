import type { Database } from "@/database/types";
import { SupabaseClient } from "@supabase/supabase-js";
import type { Sport } from "../sport/sport.types";
import { createFileName } from "./player.helper";
import { PlayerModel } from "./player.model";
import type { Player, PlayerSport } from "./player.types";

export class PlayerController {
  playerModel: PlayerModel;
  constructor(client: SupabaseClient<Database>) {
    this.playerModel = new PlayerModel(client);
  }

  async getPlayers() {
    const players = await this.playerModel.getPlayers();
    return players;
  }
  async getPlayer(dni: number) {
    const players = await this.playerModel.getPlayer(dni);
    return players;
  }

  getPlayerPhoto(dni: number, name: string, lastname: string) {
    const fileName = createFileName(dni.toString(10), name, lastname);
    return this.playerModel.getPlayerPhotoUrl(fileName);
  }

  async getPlayerSports(id: string) {
    const data = await this.playerModel.getPlayerSports(id);
    return data;
  }

  async existPlayer(dni: number) {
    const data = await this.playerModel.getPlayer(dni);
    return Boolean(data);
  }

  async createPlayer(
    playerData: Player,
    sportsFromDb: Sport[],
    photo?: File,
    sports?: string[],
    federatedSports?: string[],
  ) {
    const alreadyExists = await this.existPlayer(playerData.dni);
    if (alreadyExists)
      throw new Error(`El jugador con DNI ${playerData.dni} ya existe!`);

    const { id } = await this.playerModel.createPlayer(playerData, photo);
    if (sports?.length) {
      const playerSports = sports.map<PlayerSport>((sport) => {
        const sport_id =
          sportsFromDb.find((sportFromDb) => sportFromDb.name === sport)?.id ||
          "";
        const federated = Boolean(
          federatedSports?.find((federatedSport) => federatedSport === sport),
        );
        return {
          player_id: id,
          sport_id,
          federated,
        };
      });

      await this.playerModel.createPlayerSport(playerSports);
    }
  }
}
