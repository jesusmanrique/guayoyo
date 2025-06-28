import { UserData } from "@/interfaces/userData.interface";
import { createSupabaseConecction } from "@/lib/supabaseServer";

export async function createUser(userData: UserData) {
  const connection = await createSupabaseConecction();
  const { error } = await connection
    .schema("guayoyo_chats")
    .from("user")
    .insert(userData);
  if (error) {
    console.error("CODE:", error.code, "DESCRPTION:", error.message);
    return error;
  }

  return { success: true };
}

export async function getUser(email: string) {
  const connection = await createSupabaseConecction();
  const { data, error } = await connection
    .schema("guayoyo_chats")
    .from("user")
    .select()
    .eq("email", String(email));

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
