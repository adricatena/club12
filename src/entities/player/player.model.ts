import { type Database } from "@/database/types";
import { type SupabaseClient } from "@supabase/supabase-js";

export class PlayerModel {
  constructor(client: SupabaseClient<Database>) {}
}
