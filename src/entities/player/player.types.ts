import { Database } from "@/database/types";

export type Player = {
  birthdate: string;
  cellphone: string | null;
  dni: number;
  email: string | null;
  lastname: string;
  name: string;
  observations?: string;
};

export type PlayerFromDb = Database["public"]["Tables"]["players"]["Row"];

export type PlayerSport = {
  player_id: string;
  sport_id: string;
  federated: boolean;
};
