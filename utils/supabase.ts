import { createClient } from "@supabase/supabase-js";
const bucket = "Booking-Home";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

export const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  console.log(data);
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
