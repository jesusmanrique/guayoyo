"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogEntry {
  id: string;
  created_at: string;
  title: string;
  author: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogEntry[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/blog?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setTotal(data.total);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-white">Blog</h1>
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
      ) : (
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
      )}
      <div className="flex justify-center gap-2 mt-8">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="text-white px-2">Página {page} de {totalPages}</span>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages || posts.length === 0}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
