import React, { Suspense } from "react";

function BlogContent() {
  return (
    <section className="max-w-4xl mx-auto px-4 min-h-[60vh] mt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-info glow-text text-center">Blog Guayoyo.tech</h1>
      <p className="text-lg text-center mb-8 text-white/90">
        Descubre las últimas tendencias en automatización, inteligencia artificial y tecnología para empresas. Consejos, casos de éxito y novedades del mundo digital.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">¿Por qué automatizar tu negocio en 2024?</h2>
          <p className="text-white/80 mb-2">Conoce los beneficios clave de la automatización y cómo puede transformar la productividad de tu empresa.</p>
          <a href="#" className="text-info underline">Leer más</a>
        </article>
        <article className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Inteligencia Artificial: Casos de éxito en Latinoamérica</h2>
          <p className="text-white/80 mb-2">Historias reales de empresas que han implementado IA y han logrado resultados sorprendentes.</p>
          <a href="#" className="text-info underline">Leer más</a>
        </article>
        <article className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Automatiza tu WhatsApp: Guía paso a paso</h2>
          <p className="text-white/80 mb-2">Aprende cómo puedes automatizar la atención al cliente en WhatsApp y mejorar la experiencia de tus usuarios.</p>
          <a href="#" className="text-info underline">Leer más</a>
        </article>
        <article className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Tendencias tecnológicas para PYMES en 2024</h2>
          <p className="text-white/80 mb-2">Descubre las herramientas y tecnologías que marcarán la diferencia para las pequeñas y medianas empresas este año.</p>
          <a href="#" className="text-info underline">Leer más</a>
        </article>
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section className="max-w-4xl mx-auto px-4 min-h-[60vh] mt-24 animate-pulse">
      <div className="w-1/2 h-10 bg-base-200 rounded mb-6" />
      <div className="w-full h-6 bg-base-200 rounded mb-4" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-40 bg-base-200 rounded-xl mb-6" />
        <div className="h-40 bg-base-200 rounded-xl mb-6" />
        <div className="h-40 bg-base-200 rounded-xl mb-6" />
        <div className="h-40 bg-base-200 rounded-xl mb-6" />
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<Skeleton />}>
      <BlogContent />
    </Suspense>
  );
}
