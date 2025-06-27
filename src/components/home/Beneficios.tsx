import React from "react";

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="flex flex-col md:flex-row gap-6 justify-center items-center py-5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-4 flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-full md:w-1/3 flex flex-col justify-start mb-6 md:mb-0 z-20 px-5 animate-slide-in-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words text-left text-white">
            Beneficios de{" "}
            <span className="text-white font-bold">
              Guayoyo.tech
            </span>
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-left mt-2 text-white animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Crece sin límites: Simplifica, Ahorra, y Gana Más
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-left mt-2 text-white animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            {" "}
            <span className="text-white font-bold">
              Optimiza tu negocio sin complicaciones:
            </span>{" "}
            con Guayoyo.tech automatizas tareas, reduces costos y aumentas tu
            productividad desde el primer día. Somos tu aliado experto en
            soluciones inteligentes y personalizadas, para que te enfoques en
            crecer mientras nosotros nos encargamos del resto. ¡Empieza hoy y
            lleva tu empresa al siguiente nivel!
          </p>
        </div>
        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 justify-center items-center z-20 px-5">
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
            <div className="text-white/80 text-sm text-center">Multiplica tus resultados con automatización inteligente.</div>
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
            <div className="text-white font-bold text-lg mt-2 text-center">Aumento de Productividad</div>
            <div className="text-white/80 text-sm text-center">Haz más en menos tiempo con procesos automáticos.</div>
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
            <div className="text-white font-bold text-lg mt-2 text-center">Satisfacción del Cliente</div>
            <div className="text-white/80 text-sm text-center">Clientes felices y fidelizados con atención automatizada.</div>
          </div>
        </div>
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
  );
}
