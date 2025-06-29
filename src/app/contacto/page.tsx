"use client";
import React, { Suspense, useState } from "react";
import FuturisticButton from "@/components/ui/FuturisticButton";

function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setSubmitStatus("error");
        console.error("Error del servidor:", result.error);
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 flex flex-col items-center justify-center min-h-screen pt-28 pb-8">
      <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white text-center">Contáctanos</h1>
        <p className="text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 text-white">
          ¿Tienes dudas, quieres una demo o necesitas una solución a medida? Completa el formulario y nuestro equipo te responderá lo antes posible.
        </p>
        
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 text-center">
            ¡Mensaje enviado con éxito! Te responderemos pronto.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-300 text-center">
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 sm:gap-4">
          <label className="text-white font-semibold text-sm sm:text-base">
            Nombre
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/60" 
              placeholder="Tu nombre" 
              required 
            />
          </label>
          <label className="text-white font-semibold text-sm sm:text-base">
            Email
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/60" 
              placeholder="tu@email.com" 
              required 
            />
          </label>
          <label className="text-white font-semibold text-sm sm:text-base">
            Mensaje
            <textarea 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/60" 
              rows={3} 
              placeholder="¿En qué podemos ayudarte?" 
              required 
            />
          </label>
          <FuturisticButton 
            type="submit" 
            variant="primary" 
            size="md" 
            className="mt-3 sm:mt-4 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
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
