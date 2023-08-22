import { createClient } from "@/database/client";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = createClient(req, res);
}
