import React, { Suspense } from "react";

function QuienesSomosContent() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4 min-h-screen flex flex-col items-center pt-20">
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-info text-center">¿Quiénes Somos?</h1>
        <p className="text-sm sm:text-base md:text-lg text-center mb-6 text-white/90">
          Somos <span className="text-primary font-semibold">Guayoyo.tech</span>, una empresa apasionada por la innovación y la tecnología, dedicada a impulsar la transformación digital de negocios en Latinoamérica.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
        {/* Misión */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Nuestra Misión</h2>
          </div>
          <p className="text-white/80 text-sm sm:text-base">
            Facilitar el crecimiento de empresas y emprendedores a través de soluciones tecnológicas inteligentes, accesibles y personalizadas.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-info/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white">Nuestra Visión</h2>
          </div>
          <p className="text-white/80 text-sm sm:text-base">
            Ser referentes en automatización y tecnología aplicada, ayudando a miles de empresas a modernizarse y ser más competitivas.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Nuestros Valores</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { text: "Innovación constante", color: "text-primary" },
            { text: "Compromiso con el cliente", color: "text-info" },
            { text: "Transparencia y ética", color: "text-success" },
            { text: "Trabajo en equipo", color: "text-warning" },
            { text: "Pasión por la excelencia", color: "text-error" },
            { text: "Crecimiento sostenible", color: "text-accent" }
          ].map((valor, index) => (
            <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-current rounded-full"></div>
              <span className={`text-sm sm:text-base ${valor.color}`}>{valor.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Historia */}
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Nuestra Historia</h2>
        </div>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          <span className="text-primary font-semibold">Guayoyo.tech</span> nació en 2023 con el objetivo de acercar la tecnología de punta a empresas de todos los tamaños. Desde entonces, hemos ayudado a decenas de negocios a automatizar procesos, ahorrar tiempo y crecer de manera sostenible. 
          <br /><br />
          Nuestro equipo está formado por expertos en desarrollo, automatización e inteligencia artificial, comprometidos con el éxito de nuestros clientes y con la misión de democratizar el acceso a tecnologías avanzadas.
        </p>
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4 min-h-screen flex flex-col items-center pt-20 animate-pulse">
      <div className="w-full bg-base-200/20 backdrop-blur-md border border-base-300/20 rounded-2xl p-6 md:p-8 mb-8">
        <div className="w-1/2 h-8 bg-base-200 rounded mb-4 mx-auto" />
        <div className="w-full h-6 bg-base-200 rounded mb-4" />
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
        <div className="bg-base-200/20 backdrop-blur-md border border-base-300/20 rounded-xl p-6">
          <div className="w-1/2 h-6 bg-base-200 rounded mb-4" />
          <div className="w-full h-16 bg-base-200 rounded" />
        </div>
        <div className="bg-base-200/20 backdrop-blur-md border border-base-300/20 rounded-xl p-6">
          <div className="w-1/2 h-6 bg-base-200 rounded mb-4" />
          <div className="w-full h-16 bg-base-200 rounded" />
        </div>
      </div>
      <div className="w-full bg-base-200/20 backdrop-blur-md border border-base-300/20 rounded-xl p-6">
        <div className="w-1/3 h-6 bg-base-200 rounded mb-4" />
        <div className="w-full h-32 bg-base-200 rounded" />
      </div>
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
