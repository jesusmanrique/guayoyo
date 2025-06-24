import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

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
            Soluciones Inteligentes en Automatización
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-2 ">
            Tecnología Plug & Play, Automatizaciones Personalizadas y
            Consultoría Experta
          </p>
          <p className="text-base md:text-lg text-base-content/80">
            En Guayoyo.tech,{" "}
            <span className="text-success">
              llevamos la automatización al siguiente nivel integrando
              inteligencia artificial en cada proceso.
            </span>{" "}
            Ofrecemos soluciones plug and play listas para usar, desarrollos
            personalizados que se adaptan a los retos específicos de tu empresa
            y consultoría experta para una transformación digital efectiva.
            Moderniza tu negocio, maximiza la eficiencia y libérate de tareas
            repetitivas con el respaldo de nuestro equipo especializado.
          </p>
        </div>
        {/* Plug & Play */}
        <div id="outOfTheBox" className="bg-base-300 rounded-xl shadow-md p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-info">
            Soluciones Plug and Play
          </h2>
          <p className="text-lg md:text-xl mb-10 text-base-content">
            Automatiza, conecta y crece de inmediato. Descubre nuestras
            soluciones listas para implementar:
          </p>

          <div className="space-y-8">
            <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
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
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                    Atención y Categorización Automatizada de Clientes
                  </h3>
                  <p className="text-base-content">
                    <span className="font-semibold text-success">
                      WhatsApp e Instagram:
                    </span>{" "}
                    Automatiza respuestas, canaliza consultas y segmenta
                    clientes de forma inteligente para una atención rápida y
                    profesional en todas tus conversaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Texto a la izquierda */}
                <div className="flex-1 md:mr-4">
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                    Chatbots Inteligentes
                  </h3>
                  <p className="text-base-content">
                    <span className="font-semibold text-success">
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

            <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
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
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                    Integraciones de Gestión Empresarial
                  </h3>
                  <p className="text-base-content">
                    <span className="font-semibold text-success">
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

          <div className="mt-12 flex flex-col items-center">
            <div className="text-center text-xl font-medium mb-4 text-success">
              ¿Listo para transformar tu negocio?
            </div>
            <p className="text-base-content text-center mb-6">
              Conecta cualquiera de estas soluciones plug and play, empieza a
              disfrutar de la automatización desde el primer día y deja en manos
              de la inteligencia artificial lo que antes requería horas de
              esfuerzo manual.
            </p>
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition">
                  ¡Registrate y comienza hoy!
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition"
              >
                ¡Empecemos!
              </Link>
            </SignedIn>
          </div>
        </div>
        {/* Métricas destacadas */}
        <div className="bg-base-300 rounded-xl shadow-md p-8 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-info">
            Métricas Avanzadas
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {/* Tarjetas de métricas (70% en md+) */}
            <div className="flex flex-1 md:basis-7/10 gap-8">
              <div className="flex-1 text-center bg-base-100 p-5 card flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-success mb-2">
                  +70%
                </div>
                <div className="text-base md:text-lg text-base-content/80">
                  Aumento en eficiencia operativa
                </div>
              </div>
              <div className="flex-1 text-center bg-base-100 p-5 card flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-error mb-2">
                  -45%
                </div>
                <div className="text-base md:text-lg text-base-content/80">
                  Reducción de errores humanos
                </div>
              </div>
              <div className="flex-1 text-center bg-base-100 p-8 card flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-success mb-2">
                  24/7
                </div>
                <div className="text-base md:text-lg text-base-content/80">
                  Automatización continua
                </div>
              </div>
            </div>
            {/* El párrafo ocupa 30% en md+ y a la derecha */}
            <div className="hidden md:flex md:basis-3/10 self-stretch">
              <p className="text-base-content card bg-base-200 p-5 h-full flex items-center justify-end text-right">
                <span className="font-semibold text-info">
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
          <p className="text-base-content card bg-base-200 p-5 mt-8 md:hidden">
            <span className="font-semibold text-info">Nuestros dashboards</span>{" "}
            te permiten visualizar y analizar el funcionamiento de tus
            automatizaciones en tiempo real. Podrás seguir el flujo de cada
            proceso, consultar métricas clave, recibir alertas sobre incidencias
            y tomar decisiones informadas para optimizar el rendimiento de tu
            empresa, todo desde una interfaz intuitiva y centralizada.
          </p>
        </div>
        {/* Customizadas */}
        <div id="custom" className="bg-base-300 rounded-xl shadow-md p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Servicios de Automatización Personalizada
          </h2>
          <p className="text-lg md:text-xl mb-8 text-base-content">
            ¿Tu empresa tiene procesos únicos o retos específicos? En{" "}
            <span className="font-semibold text-info">Guayoyo.tech</span>{" "}
            diseñamos e implementamos automatizaciones{" "}
            <span className="font-bold">a medida</span>, adaptándonos por
            completo a tus flujos, sistemas y objetivos.
          </p>

          <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Texto a la izquierda */}
              <div className="flex-1 md:mr-4">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  Automatiza lo que imagines
                </h3>
                <p className="text-base-content">
                  Desde integraciones avanzadas con tus plataformas existentes,
                  hasta bots inteligentes, reportes automáticos, manejo de
                  datos, seguimiento de clientes y cualquier otro proceso que
                  desees optimizar:{" "}
                  <span className="font-semibold text-success">
                    podemos implementar prácticamente cualquier automatización
                    para los flujos de tu empresa
                  </span>
                  .
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

          <ul className="list-disc list-inside text-base-content mb-12 space-y-2">
            <li>
              Integraciones a la medida con herramientas y APIs de tu
              ecosistema.
            </li>
            <li>
              Automatización de tareas repetitivas, reportes y notificaciones.
            </li>
            <li>
              Personalización total según tus necesidades y procesos internos.
            </li>
            <li>
              Desarrollo de bots y asistentes virtuales para cualquier canal.
            </li>
            <li>Automatizaciones basadas en inteligencia artificial.</li>
          </ul>

          <div className="mt-8 flex flex-col items-center">
            <div className="text-center text-xl font-medium mb-4 text-success">
              ¿Listo para innovar en tus operaciones?
            </div>
            <p className="text-base-content text-center mb-6 ">
              Cuéntanos tu reto o tu idea: desarrollamos la solución perfecta a
              tus necesidades.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition"
            >
              Solicita tu automatizacion personalizada
            </Link>
          </div>
        </div>
      </div>
      {/* Consultoría fuera del div de customizadas */}
      <div
        id="consultoria"
        className="max-w-5xl mx-auto w-full px-4 bg-base-300 rounded-xl shadow-md p-8 z-10 relative"
      >
        <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition mb-8">
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
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                Consultoría en Inteligencia Artificial
              </h2>
              <p className="text-base-content mb-4">
                <span className="text-info font-semibold">
                  Da el salto hacia el futuro con nuestra consultoría experta en
                  IA.
                </span>
                En Guayoyo.tech, no solo analizamos y optimizamos tus procesos:
                diseñamos contigo una estrategia robusta de automatización que
                realmente impacta tus resultados. Identificamos oportunidades
                reales, implementamos soluciones a medida y te acompañamos en
                cada etapa del cambio.
                <span className="block mt-2 font-semibold text-success">
                  Asegura la competitividad y la innovación de tu empresa desde
                  hoy. Permítenos ser tus aliados estratégicos y juntos
                  llevaremos tu negocio al siguiente nivel.
                </span>
              </p>
              <Link
                href="/contacto"
                className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/80 transition"
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
