import { Sport } from "../sport/types";
import { PlayerModel } from "./player.model";
import { Player, PlayerSport } from "./types";

export class PlayerController {
  static async getPlayers(dni?: number) {
    const players = await PlayerModel.getPlayers(dni);
    return players;
  }

  static async existPlayer(dni: number) {
    const alreadyExists = await PlayerModel.existPlayer(dni);
    return alreadyExists;
  }

  static async createPlayer(
    playerData: Player,
    sportsFromDb: Sport[],
    photo?: File,
    sports?: string[],
    federatedSports?: string[],
  ) {
    const alreadyExists = await this.existPlayer(playerData.dni);
    if (alreadyExists)
      throw new Error(`El jugador con DNI ${playerData.dni} ya existe!`);

    const { id } = await PlayerModel.createPlayer(playerData, photo);
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
      await PlayerModel.createPlayerSport(playerSports);
    }
  }
}
