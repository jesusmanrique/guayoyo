import Card from "./Card";

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="flex bg-base-200 flex-col md:flex-row gap-6 justify-center items-center py-5 relative overflow-hidden"
    >
      {/* Gradiente decorativo invertido */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(47% 0.145 313 / 0.45) 0%, oklch(47% 0.145 313 / 0.20) 35%, oklch(47% 0.145 313 / 0.07) 60%, transparent 80%)",
        }}
      />
      <div className="w-full md:w-1/3 flex flex-col justify-start mb-6 md:mb-0 z-10 px-5">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words text-left text-info">
          Beneficios
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-left mt-2 ">
          Optimiza, Acelera y Automatiza
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-left mt-2">
          {" "}
          <span className="text-info font-bold">
            Reduce los costes operativos y elimina tareas repetitivas
          </span>{" "}
          con soluciones inteligentes que mejoran la eficiencia y la precisión
          en cada proceso.
        </p>
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-3 justify-center items-center z-10 px-5">
        <Card
          image="/guayoyoSvgGold.svg"
          title="Transforma gastos operativos en ganancias"
          text={
            <>
              <span className="text-info font-bold">
                Automatiza procesos manuales con IA
              </span>{" "}
              Desde gestión documental hasta atención al cliente, nuestro
              sistema ejecuta lo rutinario mientras tu equipo se enfoca en
              crecimiento estratégico.
            </>
          }
          button="Elimina costos ocultos"
        />
        <Card
          image="/guayoyoSvgGold.svg"
          title="Velocidad operativa extrema"
          text={
            <>
              <span className="text-info font-bold">
                respuestas inmediatas, decisiones en tiempo real.
              </span>{" "}
              Nuestra IA elimina atascos en ventas, inventario y soporte con
              automatización 24/7.
            </>
          }
          button="Aceleración operativa 10x"
        />
        <Card
          image="/guayoyoSvgGold.svg"
          title="Menos Errores Humanos"
          text={
            <>
              <span className="text-info font-bold">
                Precisión quirúrgica en tus operaciones.
              </span>{" "}
              Sistemas automatizados que procesan datos, decisiones y documentos
              con exactitud absoluta, eliminando el riesgo de errores humanos
              para siempre.
            </>
          }
          button="Reduce errores en un 99%"
        />
      </div>
    </section>
  );
}
