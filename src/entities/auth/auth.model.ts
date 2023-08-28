import { client } from "@/database/client";

export class AuthModel {
  static async logout() {
    const { error } = await client.auth.signOut();
    if (error) throw new Error(error.message);
  }

  static async login(email: string, password: string) {
    const { error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
  }
}
