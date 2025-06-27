import { ClientData } from "@/interfaces/clientData.interface";
import { createSupabaseConecction } from "@/lib/supabaseServer";

export async function getClientById(id: bigint | string | number) {
  const connection = await createSupabaseConecction();
  const { data, error } = await connection
    .schema("guayoyo_chats")
    .from("client")
    .select()
    .eq("id", String(id));

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

export async function getClientByDocument(document: string) {
  const connection = await createSupabaseConecction();
  const { data, error } = await connection
    .schema("guayoyo_chats")
    .from("client")
    .select()
    .eq("document", String(document));

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

export async function createClient(clientData: ClientData) {
  const connection = await createSupabaseConecction();
  const { error } = await connection
    .schema("guayoyo_chats")
    .from("client")
    .insert(clientData)
    .select();

  if (error) {
    console.error("CODE:", error.code, "DESCRPTION:", error.message);
    return error;
  }
  return { success: true };
}
