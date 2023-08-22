import {
  createPagesBrowserClient,
  createPagesServerClient,
} from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { Database } from "./types";

export const client = createPagesBrowserClient<Database>();

export function createClient(req: NextApiRequest, res: NextApiResponse) {
  return createPagesServerClient<Database>({ req, res });
}
