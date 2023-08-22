import { SportModel } from "./sport.model";

export class SportController {
  static async getSports() {
    const data = await SportModel.getSports();
    return data;
  }
}
