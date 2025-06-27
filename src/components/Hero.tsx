import Link from "next/link";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero bg-base-200 min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradiente decorativo */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to top, oklch(47% 0.145 313 / 0.45) 0%, oklch(47% 0.145 313 / 0.20) 35%, oklch(47% 0.145 313 / 0.07) 60%, transparent 80%)",
          height: "100%",
          width: "100%",
        }}
      />
      <div className="hero-content text-center w-full flex flex-col items-center px-4 relative z-10">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words">
            🚀 El futuro de tu negocio es simple, ágil y rentable{" "}
            <span className="text-info font-semibold">
              Ahorra $5,000+ mensuales
            </span>
          </h1>
          <h2 className="py-4 md:py-6 text-base sm:text-lg md:text-2xl break-words">
            <span className="text-info font-bold">
              Transforma tareas complicadas en resultados automáticos.{" "}
            </span>
            {""}
            Somos tu socio tecnológico para que tú solo pienses en crecer.
          </h2>
          <p className="py-4 md:py-6 text-sm sm:text-base md:text-lg break-words">
            ¡Diagnóstico <span className="text-success font-bold">GRATIS</span>{" "}
            de automatización!
          </p>
          <Link
            className="btn btn-primary w-full sm:w-[220px] px-6 py-2 flex items-center justify-center text-base md:text-lg mx-auto"
            href="/contacto"
          >
            Quiero Automatizar
          </Link>
        </div>
      </div>
    </div>
  );
}
