import FuturisticButton from "@/components/ui/FuturisticButton";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="hero-content text-center w-full flex flex-col items-center px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-info glow-text animate-slide-in-up">
            Automatiza tu Negocio con{" "}
            <span className="text-primary glow-text">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-base-content/90 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Soluciones plug & play, desarrollos personalizados y consultoría experta.
            <br />
            <span className="text-success glow-text font-semibold">
              Moderniza tu empresa desde el primer día.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <FuturisticButton
              href="#servicios"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Descubre Nuestras Soluciones
            </FuturisticButton>
            
            <FuturisticButton
              href="/contacto"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Habla con un Experto
            </FuturisticButton>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm md:text-base animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-success glow-text">Implementación en 24h</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-info rounded-full animate-pulse"></div>
              <span className="text-info glow-text">Soporte 24/7</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
              <span className="text-warning glow-text">Garantía de Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
