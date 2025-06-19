import ChatbotWidget from "@/components/ChatbotWidget";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Automatización | Guayoyo",
  description:
    "Descubre nuestras soluciones de IA para optimizar procesos empresariales",
  alternates: {
    canonical: "https://wwww.guayoyoa.tech",
  },
  openGraph: {
    title: "Servicios de Automatización | Guayoyo",
    description: "Soluciones avanzadas de IA para tu negocio",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <div className="hero bg-base-200 min-h-screen pt-20">
        <div className="hero-content text-center w-full flex flex-col items-center px-4">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words">
              <span
                style={{
                  display: "inline-block",
                  animation: "shake 1.2s infinite ease-in-out",
                  transformOrigin: "60% 60%",
                }}
              >
                🚀
              </span>{" "}
              Automatiza tus procesos o sigue perdiendo
              <span className="text-amber-400 font-extrabold">
                $5,000+ mensuales
              </span>
            </h1>
            <h2 className="py-4 md:py-6 text-base sm:text-lg md:text-2xl break-words">
              <span className="text-amber-400 font-bold">Soluciones de IA</span>{" "}
              que reducen <span className="text-green-400 font-bold">70%</span>{" "}
              tus tareas operativas y software a medida para escalar sin
              límites.
            </h2>
            <p className="py-4 md:py-6 text-sm sm:text-base md:text-lg break-words">
              ¡Diagnóstico{" "}
              <span className="text-green-400 font-bold">GRATIS</span> de
              automatización!
            </p>
            <button
              className="btn btn-primary w-full md:w-auto"
              style={{
                display: "inline-block",
                animation: "shake 1.2s infinite ease-in-out",
                transformOrigin: "60% 60%",
              }}
            >
              Quiero Automatizar
            </button>
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </>
  );
}
