import { NextRequest, NextResponse } from "next/server";
import { createSupabaseConecction } from "@/lib/supabaseServer";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 10;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const supabase = await createSupabaseConecction();
    const { data, error, count } = await supabase
      .schema('guayoyo_tech')
      .from('blog_entry')
      .select("id, created_at, title, author, slug", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) {
      return NextResponse.json({ posts: [], total: 0, error: error.message }, { status: 200 });
    }
    return NextResponse.json({ posts: data || [], total: count || 0 });
  } catch (e) {
    return NextResponse.json({ posts: [], total: 0, error: String(e) }, { status: 200 });
  }
} 