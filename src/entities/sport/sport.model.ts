import { Database } from "@/database/types";
import { SupabaseClient } from "@supabase/supabase-js";

export class SportModel {
  client: SupabaseClient<Database>;
  constructor(client: SupabaseClient<Database>) {
    this.client = client;
  }

  async getSports() {
    const { data, error } = await this.client.from("sports").select("name, id");
    if (error) throw new Error(error.message);
    return data;
  }
}
