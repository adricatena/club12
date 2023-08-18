import { AuthModel } from "./auth.model";

export class AuthController {
  static async signIn(email: string, password: string) {
    const auth = await AuthModel.signIn(email, password);
    return { ...auth };
  }
}
