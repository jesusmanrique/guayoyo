import Link from "next/link";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

import { FaUserPlus, FaBuilding, FaFileInvoiceDollar, FaCheckCircle } from "react-icons/fa";

export default function Proceso() {
  return (
    <section
      id="procesos"
      className="relative w-screen max-w-none left-1/2 -translate-x-1/2 py-16 px-0 flex flex-col items-center gap-8 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Fondo base muy sutil */}
      <div className="absolute inset-0 bg-base-200/20 pointer-events-none z-0"></div>
      
      {/* Gradiente decorativo con animación - más transparente */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full pointer-events-none z-0 gradient-animated opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, oklch(47% 0.145 313 / 0.25) 0%, oklch(47% 0.145 313 / 0.10) 35%, oklch(47% 0.145 313 / 0.05) 60%, transparent 80%)",
        }}
      />
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white animate-slide-in-up mb-8">
          ¿Cómo funciona Guayoyo.tech?
        </h2>
        {/* Pasos visuales */}
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Paso 1 */}
          <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 min-w-[220px] max-w-xs hover-glow animate-fade-in-scale">
            <span className="bg-primary/20 p-4 rounded-full mb-4 shadow-lg animate-float">
              <FaUserPlus className="text-4xl text-primary" />
            </span>
            <div className="text-xl font-bold text-white mb-2 text-center">Regístrate</div>
          </div>
          {/* Paso 2 */}
          <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 min-w-[220px] max-w-xs hover-glow animate-fade-in-scale">
            <span className="bg-info/20 p-4 rounded-full mb-4 shadow-lg animate-float">
              <FaBuilding className="text-4xl text-info" />
            </span>
            <div className="text-xl font-bold text-white mb-2 text-center">rellena tu perfil</div>
          </div>
          {/* Paso 3 */}
          <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 min-w-[220px] max-w-xs hover-glow animate-fade-in-scale">
            <span className="bg-accent/20 p-4 rounded-full mb-4 shadow-lg animate-float">
              <FaFileInvoiceDollar className="text-4xl text-accent" />
            </span>
            <div className="text-xl font-bold text-white mb-2 text-center">Elige tu plan</div>
          </div>
          {/* Paso 4 */}
          <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 min-w-[220px] max-w-xs hover-glow animate-fade-in-scale">
            <span className="bg-success/20 p-4 rounded-full mb-4 shadow-lg animate-float">
              <FaCheckCircle className="text-4xl text-success" />
            </span>
            <div className="text-xl font-bold text-white mb-2 text-center">¡Automatiza!</div>
          </div>
        </div>
        {/* CTAs visuales */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 w-full justify-center items-center animate-fade-in-up">
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow text-xl animate-pulse-glow w-full md:w-auto">
                Regístrate gratis
              </button>
            </SignUpButton>
          </SignedOut>
          <Link
            href="#contacto"
            className="px-10 py-4 bg-info text-white font-bold rounded-lg shadow hover:bg-info/80 transition hover-glow text-xl w-full md:w-auto animate-pulse-glow"
          >
            ¿Prefieres que te contactemos?
          </Link>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 40px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) both;
          }
          .animate-fade-in-slow {
            animation: fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) both;
          }
          .animate-slide-up {
            animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both;
          }
        `}
      </style>
    </section>
  );
}
