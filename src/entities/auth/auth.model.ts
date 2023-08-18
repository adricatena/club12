import { client } from "@/database/client";

export class AuthModel {
  static async signIn(email: string, password: string) {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }
}
