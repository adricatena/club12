import type { Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";
import type { Return } from "../types";
import type { SportFromDb } from "./sport";

export async function getSports(
  client: SupabaseClient<Database>,
): Promise<Return & { data: SportFromDb[] | null }> {
  const { data, error } = await client.from("sports").select("name, id");
  if (error || !data) return { ok: false, message: error.message, data: null };

  return { ok: true, message: "", data };
}
