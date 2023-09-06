import { Database } from "@/database/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { SportModel } from "./sport.model";

export class SportController {
  sportModel: SportModel;
  constructor(client: SupabaseClient<Database>) {
    this.sportModel = new SportModel(client);
  }

  async getSports() {
    const data = await this.sportModel.getSports();
    return data;
  }
}
