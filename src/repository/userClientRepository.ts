import { createSupabaseConecction } from "@/lib/supabaseServer";

export async function getUserClient(userId: string) {
  const connection = await createSupabaseConecction();
  const { data, error } = await connection
    .schema("guayoyo_chats")
    .from("user_client")
    .select()
    .eq("user_id", String(userId));

  if (error) {
    console.error("CODE:", error.code, "DESCRPTION:", error.message);
    return error;
  }
  if (data && data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}
