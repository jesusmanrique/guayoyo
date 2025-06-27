import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";

import Link from "next/link";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="w-screen max-w-none py-16 px-0 flex flex-col gap-12 relative overflow-hidden"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      {/* Fondo base muy sutil */}
      <div className="absolute inset-0 bg-base-200/20 pointer-events-none z-0"></div>
      
      {/* Gradiente decorativo con animación - más transparente */}
      <div
        className="absolute inset-0 pointer-events-none z-0 gradient-animated opacity-10"
        style={{
          background:
            "linear-gradient(to top, oklch(47% 0.145 313 / 0.25) 0%, oklch(47% 0.145 313 / 0.10) 35%, oklch(47% 0.145 313 / 0.05) 60%, transparent 80%)",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="max-w-5xl mx-auto py-16 w-full px-4 flex flex-col gap-12 z-20 relative">
        {/* Título y descripción */}
        <div className="mb-8 text-center animate-slide-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Nuestros{" "}
            <span className="text-white">
              Servicios
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-2 text-white animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Tecnología Plug & Play, Automatizaciones Personalizadas y
            Consultoría Experta
          </p>
          <p className="text-base md:text-lg text-white animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            En Guayoyo.tech,{" "}
            <span className="text-white">
              llevamos la automatización al siguiente nivel integrando
              inteligencia artificial en cada proceso.
            </span>{" "}
            Ofrecemos soluciones listas para usar, desarrollos
            personalizados que se adaptan a los retos específicos de tu empresa
            y consultoría experta para una transformación digital efectiva.
            Moderniza tu negocio, maximiza la eficiencia y libérate de tareas
            repetitivas con el respaldo de nuestro equipo especializado.
          </p>
        </div>
        {/* Plug & Play */}
        <div id="outOfTheBox" className=" rounded-xl py-32 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Listas para Usar
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white">
            Automatiza, conecta y crece de inmediato. Descubre nuestras
            soluciones listas para implementar:
          </p>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition hover-scale animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div
                  className="hidden md:block h-100 rounded-xl bg-center bg-cover flex-shrink-0"
                  style={{
                    backgroundImage: "url('/atencion.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "35%",
                    paddingRight: "1.5rem",
                    margin: "-1.5rem",
                  }}
                />
                {/* Texto a la derecha */}
                <div className="flex-1  ml-4">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Atención y Categorización Automatizada de Clientes
                  </h3>
                  <p className="text-white">
                    <span className="font-semibold text-white">
                      WhatsApp e Instagram:
                    </span>{" "}
                    Automatiza respuestas, canaliza consultas y segmenta
                    clientes de forma inteligente para una atención rápida y
                    profesional en todas tus conversaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition hover-scale animate-fade-in-scale" style={{ animationDelay: '1s' }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Texto a la izquierda */}
                <div className="flex-1 md:mr-4">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Chatbots Inteligentes
                  </h3>
                  <p className="text-white">
                    <span className="font-semibold text-white">
                      Telegram y Chat Embebidos:
                    </span>{" "}
                    Instala asistentes virtuales en tus canales favoritos para
                    responder consultas, capturar contactos y ofrecer soporte
                    24/7, sin complicaciones técnicas.
                  </p>
                </div>
                {/* Imagen a la derecha en desktop, ocupa 35% del ancho, toca el borde derecho */}
                <div
                  className="hidden md:block h-100 rounded-xl bg-center bg-cover flex-shrink-0"
                  style={{
                    backgroundImage: "url('/chatbot.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "35%",
                    paddingLeft: "1.5rem",
                    margin: "-1.5rem",
                  }}
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition mb-8 hover-scale animate-fade-in-scale" style={{ animationDelay: '3s' }}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Imagen a la izquierda en desktop, ocupa 35% del ancho, toca el borde izquierdo */}
                <div
                  className="hidden md:block h-100 rounded-xl bg-center bg-cover flex-shrink-0"
                  style={{
                    backgroundImage: "url('/gestion.png')", // Cambia el nombre si tu imagen es diferente
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "35%",
                    paddingRight: "1.5rem",
                    margin: "-1.5rem",
                  }}
                />
                {/* Texto a la derecha */}
                <div className="flex-1 ml-4">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Integraciones de Gestión Empresarial
                  </h3>
                  <p className="text-white">
                    <span className="font-semibold text-white">
                      Notion y Jira:
                    </span>{" "}
                    Sincroniza tareas, proyectos y flujos de trabajo mediante
                    automatizaciones directas con estas plataformas líderes.
                    Reduce errores, ahorra tiempo y ordena tu operación como
                    nunca antes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="text-center text-xl font-medium mb-4 text-white">
              ¡Implementación en 24 horas!
            </div>
            <p className="text-white text-center mb-6">
              Conecta cualquiera de estas soluciones listas para usar, empieza a
              disfrutar de la automatización desde el primer día y deja en manos
              de la inteligencia artificial lo que antes requería horas de
              esfuerzo manual.
            </p>
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow">
                  ¡Registrate y comienza hoy!
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow"
              >
                ¡Empecemos!
              </Link>
            </SignedIn>
          </div>
        </div>
        {/* Métricas destacadas */}
        <div className="rounded-xl flex flex-col animate-slide-in-up" style={{ animationDelay: '1.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Métricas Avanzadas
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {/* Tarjetas de métricas (70% en md+) */}
            <div className="flex flex-1 md:basis-7/10 gap-8">
              <div className="flex-1 text-center bg-white/10 backdrop-blur-md border border-white/20 p-5 card flex flex-col justify-center hover-scale animate-fade-in-scale" style={{ animationDelay: '1.8s' }}>
                <div className="text-4xl md:text-5xl font-extrabold text-success mb-2">
                  +70%
                </div>
                <div className="text-white">
                  Aumento en eficiencia operativa
                </div>
              </div>
              <div className="flex-1 text-center bg-white/10 backdrop-blur-md border border-white/20 p-5 card flex flex-col justify-center hover-scale animate-fade-in-scale" style={{ animationDelay: '2s' }}>
                <div className="text-4xl md:text-5xl font-extrabold text-error mb-2">
                  -45%
                </div>
                <div className="text-white">
                  Reducción de errores humanos
                </div>
              </div>
              <div className="flex-1 text-center bg-white/10 backdrop-blur-md border border-white/20 p-8 card flex flex-col justify-center hover-scale animate-fade-in-scale" style={{ animationDelay: '2.2s' }}>
                <div className="text-4xl md:text-5xl font-extrabold text-success mb-2">
                  24/7
                </div>
                <div className="text-white">
                  Automatización continua
                </div>
              </div>
            </div>
            {/* El párrafo ocupa 30% en md+ y a la derecha */}
            <div className="hidden md:flex md:basis-3/10 self-stretch">
              <p className="text-white card bg-white/10 backdrop-blur-md border border-white/20 p-5 h-full flex items-center justify-end text-right hover-scale">
                <span className="font-semibold text-white">
                  Nuestros dashboards
                </span>{" "}
                te permiten visualizar y analizar el funcionamiento de tus
                automatizaciones en tiempo real. Podrás seguir el flujo de cada
                proceso, consultar métricas clave, recibir alertas sobre
                incidencias y tomar decisiones informadas para optimizar el
                rendimiento de tu empresa, todo desde una interfaz intuitiva y
                centralizada.
              </p>
            </div>
          </div>
          {/* El párrafo solo visible en móvil, debajo de las tarjetas */}
          <p className="text-white card bg-white/10 backdrop-blur-md border border-white/20 p-5 mt-8 md:hidden hover-scale">
            <span className="font-semibold text-white">Nuestros dashboards</span>{" "}
            te permiten visualizar y analizar el funcionamiento de tus
            automatizaciones en tiempo real. Podrás seguir el flujo de cada
            proceso, consultar métricas clave, recibir alertas sobre incidencias
            y tomar decisiones informadas para optimizar el rendimiento de tu
            empresa, todo desde una interfaz intuitiva y centralizada.
          </p>
        </div>
        {/* Customizadas */}
        <div id="custom" className=" rounded-xl py-32 animate-slide-in-up" style={{ animationDelay: '2.4s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Servicios de Automatización Personalizada
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white">
            ¿Tu empresa tiene procesos únicos o retos específicos? En{" "}
            <span className="font-semibold text-white">Guayoyo.tech</span>{" "}
            diseñamos e implementamos automatizaciones{" "}
            <span className="font-bold text-white">a medida</span>, adaptándonos por
            completo a tus flujos, sistemas y objetivos.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition mb-8 hover-scale animate-fade-in-scale" style={{ animationDelay: '3s' }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Texto a la izquierda */}
              <div className="flex-1 md:mr-4">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Automatiza lo que imagines
                </h3>
                <p className="text-white">
                  Desde integraciones avanzadas con tus plataformas existentes,
                  hasta bots inteligentes, reportes automáticos, manejo de
                  datos, seguimiento de clientes y cualquier otro proceso que
                  desees optimizar:{" "}
                  <span className="font-semibold text-white">
                    podemos implementar prácticamente cualquier automatización
                    para los flujos de tu empresa
                  </span>
                  {""}.
                </p>
              </div>
              {/* Imagen a la derecha en desktop, ocupa 35% del ancho, toca el borde derecho */}
              <div
                className="hidden md:block h-100 rounded-xl bg-center bg-cover flex-shrink-0"
                style={{
                  backgroundImage: "url('/automatiza.png')", // Cambia el nombre si tu imagen es diferente
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "35%",
                  paddingLeft: "1.5rem",
                  margin: "-1.5rem",
                }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center animate-slide-in-up" style={{ animationDelay: '2.8s' }}>
            <div className="text-center text-xl font-medium mb-4 text-white">
              ¡Transforma tu negocio con expertos!
            </div>
            <p className="text-white text-center mb-6 ">
              Cuéntanos tu reto o tu idea: desarrollamos la solución perfecta a
              tus necesidades.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow"
            >
              Solicita tu automatizacion personalizada
            </Link>
          </div>
        </div>
      </div>
      {/* Consultoría fuera del div de customizadas */}
      <div
        id="consultoria"
        className="max-w-5xl mx-auto w-full px-4 rounded-xl z-20 relative"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition mb-8 hover-scale animate-fade-in-scale" style={{ animationDelay: '3s' }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Imagen a la izquierda en desktop, ocupa 35% del ancho, toca el borde izquierdo */}
            <div
              className="hidden md:block h-100 rounded-xl bg-center bg-cover flex-shrink-0"
              style={{
                backgroundImage: "url('/consultoria.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "35%",
                paddingRight: "1.5rem",
                margin: "-1.5rem",
              }}
            />
            {/* Texto a la derecha */}
            <div className="flex-1 ml-4">
              <h2 className="text-2xl font-semibold mb-2 text-white">
                Consultoría en Inteligencia Artificial
              </h2>
              <p className="text-white mb-4">
                <span className="text-white font-semibold">
                  Da el salto hacia el futuro con nuestra consultoría experta en
                  IA.
                </span>{" "}
                En Guayoyo.tech, no solo analizamos y optimizamos tus procesos:
                diseñamos contigo una estrategia robusta de automatización que
                realmente impacta tus resultados. Identificamos oportunidades
                reales, implementamos soluciones a medida y te acompañamos en
                cada etapa del cambio.
                <span className="block mt-2 font-semibold text-white">
                  Asegura la competitividad y la innovación de tu empresa desde
                  hoy. Permítenos ser tus aliados estratégicos y juntos
                  llevaremos tu negocio al siguiente nivel.
                </span>
              </p>
              <Link
                href="/contacto"
                className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow"
              >
                Agenda tu consultoría ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
