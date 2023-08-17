import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSidePropsContext } from "next";
import { Database } from "./types";

export function createServerClient(context: GetServerSidePropsContext) {
  return createPagesServerClient<Database>(context);
}

export function useSupabase() {
  return useSupabaseClient<Database>();
}
