import { Sport } from "../sport/types";
import { PlayerModel } from "./player.model";
import { Player, PlayerSport } from "./types";

export class PlayerController {
  static async createPlayer(
    playerData: Player,
    sportsFromDb: Sport[],
    photo?: File,
    sports?: string[],
    federatedSports?: string[],
  ) {
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
