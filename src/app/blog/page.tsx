import { createSupabaseConecction } from "@/lib/supabaseServer";
import Link from "next/link";
import BlogClient from "./BlogClient";

export default async function BlogPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
  searchParams,
}: {
  params: Promise<{ [key: string]: string | string[] }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageNumber = parseInt(page || "1", 10);
  const pageSize = 10;
  const from = (pageNumber - 1) * pageSize;
  const to = from + pageSize - 1;

  const supabase = await createSupabaseConecction();
  const { data: posts, count } = await supabase
    .schema('guayoyo_tech')
    .from('blog_entry')
    .select("id, created_at, title, author, slug", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  const total = count || 0;
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-white">Blog</h1>
      <ul className="space-y-10">
        {(Array.isArray(posts) ? posts : []).map(post => (
          <li
            key={post.id}
            className="relative group bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl p-0 shadow-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.025] hover:shadow-[0_8px_40px_0_rgba(60,230,255,0.15)] hover:border-cyan-400/40"
          >
            <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-[#5caaff]/10 via-transparent to-[#3ee6ff]/10 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-300" />
            <div className="relative z-10 p-8 flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-white/60 mb-4">
                <span className="inline-block bg-white/10 px-3 py-1 rounded-full font-semibold tracking-wide">
                  {post.author}
                </span>
                <span className="inline-block bg-white/10 px-3 py-1 rounded-full">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-2">
                <span className="glassmorph-btn bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-semibold rounded-full px-7 py-2 shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-all">
                  Leer artículo
                </span>
              </Link>
            </div>
          </li>
        ))}
        {Array.isArray(posts) && posts.length === 0 && (
          <div className="text-center text-white/60 py-8">No hay entradas de blog disponibles.</div>
        )}
      </ul>
      <BlogClient currentPage={pageNumber} totalPages={totalPages} />
    </div>
  );
}
