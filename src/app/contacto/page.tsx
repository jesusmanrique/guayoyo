import React, { Suspense } from "react";

function ContactoForm() {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh] mt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-info glow-text text-center">Contáctanos</h1>
      <p className="text-lg text-center mb-8 text-white/90">
        ¿Tienes dudas, quieres una demo o necesitas una solución a medida? Completa el formulario y nuestro equipo te responderá lo antes posible.
      </p>
      <form className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg flex flex-col gap-4">
        <label className="text-white font-semibold">Nombre
          <input type="text" className="input input-bordered w-full mt-1" placeholder="Tu nombre" required />
        </label>
        <label className="text-white font-semibold">Email
          <input type="email" className="input input-bordered w-full mt-1" placeholder="tu@email.com" required />
        </label>
        <label className="text-white font-semibold">Mensaje
          <textarea className="textarea textarea-bordered w-full mt-1" rows={4} placeholder="¿En qué podemos ayudarte?" required />
        </label>
        <button type="submit" className="btn btn-primary font-bold mt-4">Enviar mensaje</button>
      </form>
      <div className="mt-8 text-center text-white/80">
        También puedes escribirnos a <a href="mailto:hola@guayoyo.tech" className="text-info underline">hola@guayoyo.tech</a> o por WhatsApp al <a href="https://wa.me/584142074541" className="text-success underline">+58 414 2074541</a>.
      </div>
    </section>
  );
}

function Skeleton() {
  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center min-h-[60vh] mt-24 animate-pulse">
      <div className="w-full h-10 bg-base-200 rounded mb-6" />
      <div className="w-full h-6 bg-base-200 rounded mb-4" />
      <div className="w-full h-64 bg-base-200 rounded-xl mb-6" />
      <div className="w-1/2 h-8 bg-base-200 rounded" />
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
