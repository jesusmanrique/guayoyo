import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="hero bg-base-200 min-h-screen pt-20">
        <div className="hero-content text-center w-full flex flex-col items-center px-4">
          <div className="w-full max-w-xs sm:max-w-md md:max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words">
              🚀 Automatiza tus procesos o sigue perdiendo $5,000+ mensuales
            </h1>
            <h2 className="py-4 md:py-6 text-base sm:text-lg md:text-2xl break-words">
              Soluciones de IA que reducen 70% tus tareas operativas y software
              a medida para escalar sin límites.
            </h2>
            <p className="py-4 md:py-6 text-sm sm:text-base md:text-lg break-words">
              ¡Diagnóstico GRATIS de automatización!
            </p>
            <button className="btn btn-primary w-full md:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
