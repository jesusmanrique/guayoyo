import Card from "@/components/ui/Card";

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
        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-4 justify-center items-center z-20 px-5">
          <Card
            image="/ahorra-tiempo-y-dinero.png"
            title="Ahorra Tiempo y Dinero"
            text="Reduce costos operativos hasta en un 70% y libera tiempo valioso para que te enfoques en lo que realmente importa: hacer crecer tu negocio."
          />
          <Card
            image="/productividad.png"
            title="Aumenta la Productividad"
            text="Automatiza tareas repetitivas y mejora la eficiencia de tu equipo. Nuestras soluciones te permiten hacer más con menos recursos."
          />
          <Card
            image="/tec-a-medida.png"
            title="Tecnología a Medida"
            text="Soluciones personalizadas que se adaptan perfectamente a tus procesos y necesidades específicas. No más adaptaciones forzadas."
          />
        </div>
      </div>
    </section>
  );
}
