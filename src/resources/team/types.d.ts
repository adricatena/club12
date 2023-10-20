import type { PlayerFromDb } from "../player/types";
import type { SportFromDb } from "../sport/types";

export type NewTeam = {
  name: string;
  sport: SportFromDb;
  photo: File;
  players: PlayerFromDb[];
};
