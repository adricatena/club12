import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { Database } from "./types";

export function createServerClient(context: GetServerSidePropsContext) {
  return createPagesServerClient<Database>(context);
}
