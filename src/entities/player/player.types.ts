import { Database } from "@/database/types";

export type PlayerFromDb = Database["public"]["Tables"]["players"]["Row"];

export type PlayerSport = {
  player_id: string;
  sport_id: string;
  federated: boolean;
};

export type PlayerSportFromDb = {
  federated: boolean;
  name: string;
};
