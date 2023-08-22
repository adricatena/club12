import { client } from "@/database/client";

export class SportModel {
  static async getSports() {
    const { data, error } = await client.from("sport").select("name, id");
    if (error) throw new Error(error.message);
    return data;
  }
}
