import { SportModel } from "./sport.model";

export class SportController {
  static async getSports() {
    const sports = SportModel.getSports();
    return sports;
  }
}
