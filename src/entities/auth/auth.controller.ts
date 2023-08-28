import { AuthModel } from "./auth.model";

export class AuthController {
  static async logout() {
    await AuthModel.logout();
  }

  static async login(email: string, password: string) {
    await AuthModel.login(email, password);
  }
}
