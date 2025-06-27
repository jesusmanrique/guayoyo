"use client";
import ChatbotWidget from "@/components/home/ChatbotWidget";
import Hero from "@/components/home/Hero";
import Servicios from "@/components/home/Servicios";
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
      <section className="max-w-6xl mx-auto px-4 py-14 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Resultados Comprobados</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8">
          {/* Gráfica 1: Barra de progreso animada */}
          <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 w-full max-w-xs animate-fade-in-scale">
            <svg width="120" height="60" viewBox="0 0 120 60">
              <rect x="10" y="30" width="100" height="16" rx="8" fill="#22223b" />
              <rect x="10" y="30" width="100" height="16" rx="8" fill="#6c63ff" style={{
                stroke: '#fff',
                strokeWidth: 2,
                transform: 'scaleX(0.8)',
                transformOrigin: 'left',
                transition: 'transform 1.2s cubic-bezier(.4,2,.6,1)'
              }} className="progress-bar" />
              <text x="60" y="25" textAnchor="middle" fontSize="18" fill="#6c63ff" fontWeight="bold">+300% ROI</text>
            </svg>
            <div className="text-white font-bold text-lg mt-2 text-center">Retorno de Inversión</div>
          </div>
          {/* Gráfica 2: Línea de crecimiento animada */}
          <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 w-full max-w-xs animate-fade-in-scale">
            <svg width="120" height="60" viewBox="0 0 120 60">
              <polyline
                points="10,50 40,40 70,30 100,10"
                fill="none"
                stroke="#00e0ff"
                strokeWidth="4"
                className="growth-line"
                style={{
                  strokeDasharray: 120,
                  strokeDashoffset: 120,
                  animation: 'lineGrow 1.2s forwards cubic-bezier(.4,2,.6,1)'
                }}
              />
              <circle cx="100" cy="10" r="6" fill="#00e0ff" className="animate-pulse-glow" />
              <text x="60" y="25" textAnchor="middle" fontSize="18" fill="#00e0ff" fontWeight="bold">+200%</text>
            </svg>
            <div className="text-white font-bold text-lg mt-2 text-center">Productividad</div>
          </div>
          {/* Gráfica 3: Círculo de progreso animado */}
          <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 w-full max-w-xs animate-fade-in-scale">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="32" stroke="#22223b" strokeWidth="10" fill="none" />
              <circle
                cx="40" cy="40" r="32"
                stroke="#00ffb4"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 32}
                strokeDashoffset={2 * Math.PI * 32 * 0.02}
                style={{
                  transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,2,.6,1)',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 8px #00ffb4)'
                }}
                className="progress-circle"
              />
              <text x="40" y="48" textAnchor="middle" fontSize="22" fill="#00ffb4" fontWeight="bold">98%</text>
            </svg>
            <div className="text-white font-bold text-lg mt-2 text-center">Satisfacción</div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6">
          <a href="/onboarding" className="px-10 py-5 bg-gradient-to-r from-primary to-info text-white text-2xl font-extrabold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all glow-primary animate-pulse-glow">
            ¡Quiero estos resultados!
          </a>
        </div>
        <style jsx>{`
          .progress-bar {
            animation: barGrow 1.2s cubic-bezier(.4,2,.6,1) forwards;
          }
          @keyframes barGrow {
            from { transform: scaleX(0.1); }
            to { transform: scaleX(0.8); }
          }
          .growth-line {
            animation: lineGrow 1.2s cubic-bezier(.4,2,.6,1) forwards;
          }
          @keyframes lineGrow {
            from { stroke-dashoffset: 120; }
            to { stroke-dashoffset: 0; }
          }
          .progress-circle {
            animation: circleGrow 1.2s cubic-bezier(.4,2,.6,1) forwards;
          }
          @keyframes circleGrow {
            from { stroke-dashoffset: ${2 * Math.PI * 32}; }
            to { stroke-dashoffset: ${2 * Math.PI * 32 * 0.02}; }
          }
        `}</style>
      </section>
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
