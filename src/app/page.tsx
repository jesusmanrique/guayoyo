"use client";
import ChatbotWidget from "@/components/home/ChatbotWidget";
import Hero from "@/components/home/Hero";
import Servicios from "@/components/home/Servicios";
import Beneficios from "@/components/home/Beneficios";
import Proceso from "@/components/home/Proceso";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState, Suspense } from "react";

function HomeSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-64 bg-base-200 mb-8 rounded-xl" />
      <div className="w-full h-40 bg-base-200 mb-8 rounded-xl" />
      <div className="w-full h-80 bg-base-200 mb-8 rounded-xl" />
      <div className="w-full h-64 bg-base-200 mb-8 rounded-xl" />
    </div>
  );
}

function HomeContent() {
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
          className="fixed bottom-6 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-md p-2 opacity-80 hover:bg-white/20 hover:scale-105 transition-all glow-primary/30"
          aria-label="Volver al inicio"
        >
          <span className="inline-block animate-bounce-slow">
            <FaArrowUp size={20} />
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

export default function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeContent />
    </Suspense>
  );
}
