import type { Database } from "@/database/types";

export type PlayerFromDb = Database["public"]["Tables"]["players"]["Row"];

export type NewPlayer = {
  name: string;
  lastname: string;
  dni: string;
  birthdate: string;
  email: string;
  cellphone: string;
  photoSrc: string;
  photo?: File;
  activeSports: string[];
  federatedSports: string[];
};

export type UpdatePlayer = NewPlayer & {
  id: string;
  observations: string;
  active: boolean;
};

export type PlayerSportFromDb = {
  federated: boolean;
  name: string;
  id: string;
};

type tmpPlayerSport = Database["public"]["Tables"]["players_sports"]["Row"];
export type PlayerSport = Omit<tmpPlayerSport, tmpPlayerSport["created_at"]>;
