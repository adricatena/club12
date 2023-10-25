import type { Database } from "@/database/types";
import type { PlayerFromDb } from "../player/types";
import type { SportFromDb } from "../sport/types";

export type NewTeam = {
  name: string;
  sport: SportFromDb;
  photoSrc: string;
  photo?: File;
  players: PlayerFromDb[];
};

export type TeamFromDb = Omit<
  Database["public"]["Tables"]["teams"]["Row"],
  "created_at"
>;

export type UpdateTeam = NewTeam & {
  id: string;
  active: boolean;
};
