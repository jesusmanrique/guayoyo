import { NextRequest, NextResponse } from "next/server";
import { createSupabaseConecction } from "@/lib/supabaseServer";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createSupabaseConecction();
  const { data, error } = await supabase
    .schema('guayoyo_tech')
    .from('blog_entry')
    .select("id, created_at, title, author, slug, content")
    .eq("slug", slug)
    .single();

  if (error || !data) return NextResponse.json({ error: error?.message || "No encontrado" }, { status: 404 });
  return NextResponse.json(data);
} 