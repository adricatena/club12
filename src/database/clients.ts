import {
  createPagesBrowserClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { type GetServerSidePropsContext } from "next";
import { type Database } from "./types";

export const browserClient = createPagesBrowserClient<Database>();

export function getServerClient(context: GetServerSidePropsContext) {
  return createPagesServerClient<Database>(context);
}
