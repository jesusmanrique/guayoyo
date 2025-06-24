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
          Crece sin límites: Simplifica, Ahorra, y Gana Más
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-left mt-2">
          {" "}
          <span className="text-info font-bold">
            Optimiza tu negocio sin complicaciones:
          </span>{" "}
          con Guayoyo.tech automatizas tareas, reduces costos y aumentas tu
          productividad desde el primer día. Somos tu aliado experto en
          soluciones inteligentes y personalizadas, para que te enfoques en
          crecer mientras nosotros nos encargamos del resto. ¡Empieza hoy y
          lleva tu empresa al siguiente nivel!
        </p>
      </div>
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-3 justify-center items-center z-10 px-5">
        <Card
          image="/ahorra-tiempo-y-dinero.png"
          title="Ahorra Tiempo y Dinero"
          text={
            <>
              <span className="text-info font-bold">
                Reduce automáticamente tareas repetitivas y operativas que
                consumen recursos y energía.
              </span>{" "}
              Con Guayoyo.tech, inviertes menos en procesos y más en
              crecimiento, logrando resultados visibles desde el primer mes. Haz
              que tu empresa trabaje de forma más inteligente, no más dura.
            </>
          }
        />
        <Card
          image="/productividad.png"
          title="Productividad sin Límites"
          text={
            <>
              <span className="text-info font-bold">
                Descubre el verdadero potencial de tu negocio liberando a tu
                equipo de tareas manuales.
              </span>{" "}
              Nuestras soluciones inteligentes se adaptan a lo que necesitas,
              permitiéndote dedicarte a lo que de verdad importa: vender,
              innovar y crecer. Da el salto hacia una gestión eficiente y
              confiable.
            </>
          }
        />
        <Card
          image="/tec-a-medida.png"
          title="Tecnología a tu Medida"
          text={
            <>
              <span className="text-info font-bold">
                Olvídate de los softwares genéricos y complicados.
              </span>{" "}
              En Guayoyo.tech creamos y configuramos herramientas personalizadas
              para que todo funcione según tu forma de trabajar. Transformamos
              tus procesos en ventajas competitivas, con soporte experto.
            </>
          }
        />
      </div>
    </section>
  );
}
