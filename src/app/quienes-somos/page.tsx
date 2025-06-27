import React, { Suspense } from "react";

function QuienesSomosContent() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center mt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-info glow-text text-center">¿Quiénes Somos?</h1>
      <p className="text-lg text-center mb-8 text-white/90">
        Somos Guayoyo.tech, una empresa apasionada por la innovación y la tecnología, dedicada a impulsar la transformación digital de negocios en Latinoamérica.
      </p>
      <div className="mb-8 w-full">
        <h2 className="text-2xl font-semibold text-white mb-2">Nuestra Misión</h2>
        <p className="text-white/80 mb-4">Facilitar el crecimiento de empresas y emprendedores a través de soluciones tecnológicas inteligentes, accesibles y personalizadas.</p>
        <h2 className="text-2xl font-semibold text-white mb-2">Nuestra Visión</h2>
        <p className="text-white/80 mb-4">Ser referentes en automatización y tecnología aplicada, ayudando a miles de empresas a modernizarse y ser más competitivas.</p>
        <h2 className="text-2xl font-semibold text-white mb-2">Nuestros Valores</h2>
        <ul className="list-disc list-inside text-white/80 mb-4">
          <li>Innovación constante</li>
          <li>Compromiso con el cliente</li>
          <li>Transparencia y ética</li>
          <li>Trabajo en equipo</li>
          <li>Pasión por la excelencia</li>
        </ul>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-white mb-2">Nuestra Historia</h2>
        <p className="text-white/80">Guayoyo.tech nació en 2023 con el objetivo de acercar la tecnología de punta a empresas de todos los tamaños. Desde entonces, hemos ayudado a decenas de negocios a automatizar procesos, ahorrar tiempo y crecer de manera sostenible. Nuestro equipo está formado por expertos en desarrollo, automatización e inteligencia artificial, comprometidos con el éxito de nuestros clientes.</p>
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center mt-24 animate-pulse">
      <div className="w-1/2 h-10 bg-base-200 rounded mb-6" />
      <div className="w-full h-6 bg-base-200 rounded mb-4" />
      <div className="w-full h-32 bg-base-200 rounded-xl mb-6" />
      <div className="w-1/2 h-8 bg-base-200 rounded" />
    </section>
  );
}

export default function QuienesSomos() {
  return (
    <Suspense fallback={<Skeleton />}>
      <QuienesSomosContent />
    </Suspense>
  );
}
