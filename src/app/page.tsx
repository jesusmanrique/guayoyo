"use client";
import ChatbotWidget from "@/components/ChatbotWidget";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Beneficios from "@/components/Beneficios";
import Proceso from "@/components/Proceso";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  // Mostrar el botón solo si el usuario ha hecho scroll
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Beneficios />
      <Servicios />
      <Proceso />
      <ChatbotWidget />
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 bg-primary text-white rounded-full shadow-lg p-3 hover:bg-primary/80 transition-all"
          aria-label="Volver al inicio"
        >
          <span className="inline-block animate-bounce-slow">
            <FaArrowUp size={24} />
          </span>
        </button>
      )}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.2s infinite;
          }
        `}
      </style>
    </>
  );
}
