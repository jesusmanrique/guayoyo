import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blog/${slug}`, { cache: 'no-store' });
  if (!res.ok) return notFound();
  const post = await res.json();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pt-24">
      <div className="relative bg-gradient-to-br from-white/10 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-[#5caaff]/10 via-transparent to-[#3ee6ff]/10 blur-xl opacity-60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-white/70 mb-8">
            <span className="inline-block bg-white/10 px-3 py-1 rounded-full font-semibold tracking-wide">
              {post.author}
            </span>
            <span className="inline-block bg-white/10 px-3 py-1 rounded-full">
              {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
          <article className="prose prose-invert prose-lg max-w-none text-white/90 [&_p]:mb-5 [&_p]:leading-relaxed [&_p]:text-white/90 [&_p]:text-lg [&_a]:text-cyan-400 [&_a]:underline hover:[&_a]:text-cyan-300">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    </div>
  );
} 