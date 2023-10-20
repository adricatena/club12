import type { Database } from "@/database/types";
import type { SupabaseClient } from "@supabase/supabase-js";

type UploadPhoto = {
  client: SupabaseClient<Database>;
  filename: string;
  photo: File;
  bucket: string;
};
export const uploadPhoto = async (data: UploadPhoto) => {
  const { client, filename, photo, bucket } = data;
  return await client.storage
    .from(bucket)
    .upload(filename, photo, { upsert: true });
};
