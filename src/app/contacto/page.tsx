import React, { Suspense } from "react";
import FuturisticButton from "@/components/ui/FuturisticButton";

function ContactoForm() {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen pt-28 pb-8">
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white text-center">Contáctanos</h1>
        <p className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 text-white">
          ¿Tienes dudas, quieres una demo o necesitas una solución a medida? Completa el formulario y nuestro equipo te responderá lo antes posible.
        </p>
        <form className="w-full flex flex-col gap-3 sm:gap-4">
          <label className="text-white font-semibold text-sm sm:text-base">Nombre
            <input type="text" className="input input-bordered w-full mt-1" placeholder="Tu nombre" required />
          </label>
          <label className="text-white font-semibold text-sm sm:text-base">Email
            <input type="email" className="input input-bordered w-full mt-1" placeholder="tu@email.com" required />
          </label>
          <label className="text-white font-semibold text-sm sm:text-base">Mensaje
            <textarea className="textarea textarea-bordered w-full mt-1" rows={3} placeholder="¿En qué podemos ayudarte?" required />
          </label>
          <FuturisticButton type="submit" variant="primary" size="md" className="mt-3 sm:mt-4 w-full">
            Enviar mensaje
          </FuturisticButton>
        </form>
        <div className="mt-6 sm:mt-8 text-center text-white text-xs sm:text-sm md:text-base">
          También puedes escribirnos a <a href="mailto:hola@guayoyo.tech" className="text-info underline">hola@guayoyo.tech</a> o por WhatsApp al <a href="https://wa.me/584142074541" className="text-success underline">+58 414 2074541</a>.
        </div>
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen pt-20 pb-8 animate-pulse">
      <div className="w-full bg-base-200/20 backdrop-blur-md border border-base-300/20 rounded-2xl p-6 md:p-8">
        <div className="w-full h-8 bg-base-200 rounded mb-4" />
        <div className="w-full h-4 bg-base-200 rounded mb-6" />
        <div className="w-full h-48 bg-base-200 rounded-xl mb-4" />
        <div className="w-1/2 h-6 bg-base-200 rounded" />
      </div>
    </section>
  );
}

export default function Contacto() {
  return (
    <Suspense fallback={<Skeleton />}>
      <ContactoForm />
    </Suspense>
  );
}
