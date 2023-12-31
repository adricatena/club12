import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import { SportFromDb } from "../sport/types";

export const getPlayerFilename = (
  dni: string | number,
  name: string,
  lastname: string,
  type: "png" | "webp" | "jpeg" | "jpg" = "webp",
) => `${dni}_${name}_${lastname}.${type}`;

type InsertPlayerSport = {
  client: SupabaseClient<Database>;
  activeSports: string[];
  federatedSports: string[];
  sportsFromDb: SportFromDb[];
  player_id: string;
};
export const insertPlayerSports = async ({
  client,
  activeSports,
  federatedSports,
  sportsFromDb,
  player_id,
}: InsertPlayerSport) => {
  const playerSports = activeSports.map((sport) => {
    const sport_id = sportsFromDb.find(
      (sportFromDb) => sportFromDb.name === sport,
    )!.id;
    const federated = Boolean(
      federatedSports.find((federatedSport) => federatedSport === sport),
    );
    return {
      player_id,
      sport_id,
      federated,
    };
  });
  return await client.from("players_sports").insert(playerSports);
};
