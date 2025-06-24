export default function Servicios() {
  return (
    <section
      id="servicios"
      className="w-screen max-w-none py-16 px-0 flex flex-col gap-12 relative overflow-hidden bg-base-200"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      {/* Gradiente decorativo igual al Hero */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to top, oklch(47% 0.145 313 / 0.45) 0%, oklch(47% 0.145 313 / 0.20) 35%, oklch(47% 0.145 313 / 0.07) 60%, transparent 80%)",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Contenido centrado */}
      <div className="max-w-5xl mx-auto w-full px-4 flex flex-col gap-12 z-10 relative">
        {/* Título y descripción */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-info">
            Nuestros Servicios
          </h1>
          <p className="text-base md:text-lg text-base-content/80">
            Descubre nuestras soluciones de automatización: desde integraciones
            listas para usar, desarrollos personalizados y consultoría experta
            para transformar tu negocio con IA.
          </p>
        </div>
        {/* Plug & Play */}
        <div id="outOfTheBox" className="bg-base-300 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-info">Plug & Play</h2>
          <p className="text-base">
            Soluciones listas para usar que se integran rápidamente con tus
            plataformas favoritas. Automatiza tareas comunes sin necesidad de
            desarrollo personalizado y comienza a ver resultados en minutos.
          </p>
        </div>
        {/* Customizadas */}
        <div id="custom" className="bg-base-300 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-info">Customizadas</h2>
          <p className="text-base">
            Desarrollamos automatizaciones y flujos a la medida de tu negocio.
            Integramos APIs, sistemas internos y plataformas externas para
            resolver necesidades específicas y maximizar tu eficiencia.
          </p>
        </div>
        {/* Consultoría */}
        <div id="consultoria" className="bg-base-300 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-2 text-info">Consultoría</h2>
          <p className="text-base">
            Te asesoramos en la transformación digital de tus procesos.
            Analizamos tus operaciones, identificamos oportunidades de
            automatización y te guiamos en la implementación de soluciones
            inteligentes.
          </p>
        </div>
      </div>
    </section>
  );
}
