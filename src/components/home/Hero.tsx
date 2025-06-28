import FuturisticButton from "@/components/ui/FuturisticButton";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero min-h-[60vh] pt-8 mt-10 flex items-center justify-center relative overflow-hidden"
    >
      <div className="hero-content text-center w-full flex flex-col items-center px-4 relative z-20">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-8 text-white animate-slide-in-up">
            Automatiza tu Negocio con{" "}
            <span className="text-white">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white animate-slide-in-up" style={{ animationDelay: '0.2s' }}>

            <span className="text-white font-semibold">
              Lleva tu empresa al siguiente nivel desde el primer día con inteligencia artificial.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <FuturisticButton
              href="#servicios"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
            >
              Descubre Nuestras Soluciones
            </FuturisticButton>
            
            <FuturisticButton
              href="/contacto"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
            >
              Habla con un Experto
            </FuturisticButton>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center text-xs sm:text-sm md:text-base animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-success">Implementación en 24h</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-info rounded-full animate-pulse"></div>
              <span className="text-info">Soporte 24/7</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="text-warning">Garantía de Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
