import {
  createPagesBrowserClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { type GetServerSidePropsContext } from "next";
import { type Database } from "./types";

export const client = createPagesBrowserClient<Database>();

export function serverClient(context: GetServerSidePropsContext) {
  return createPagesServerClient<Database>(context);
}
