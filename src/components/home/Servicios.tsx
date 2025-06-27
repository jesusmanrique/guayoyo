import { SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";

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
            Tecnología lista para usar, Automatizaciones Personalizadas y
            Consultoría Experta
          </p>
          {/* Gráfico visual de flujo de trabajo */}
          <div className="flex justify-center items-center mt-8 w-full max-w-3xl mx-auto">
            <svg width="100%" height="160" viewBox="0 0 900 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-40">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6c63ff" />
                  <stop offset="100%" stopColor="#00e0ff" />
                </linearGradient>
                <linearGradient id="arrowGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00e0ff" />
                  <stop offset="100%" stopColor="#00ffb4" />
                </linearGradient>
              </defs>
              {/* Nodos equidistantes */}
              {/* Entrada */}
              <circle cx="150" cy="100" r="34" fill="#181825" stroke="#6c63ff" strokeWidth="3" />
              <text x="150" y="108" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold" stroke="#222" strokeWidth="2" paintOrder="stroke" style={{filter:'drop-shadow(0 1px 2px #0008)'}}>Entrada</text>
              {/* IA */}
              <circle cx="350" cy="100" r="34" fill="#181825" stroke="#00e0ff" strokeWidth="3" />
              <text x="350" y="108" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold" stroke="#222" strokeWidth="2" paintOrder="stroke" style={{filter:'drop-shadow(0 1px 2px #0008)'}}>IA</text>
              {/* Validación */}
              <circle cx="550" cy="100" r="34" fill="#181825" stroke="#00ffb4" strokeWidth="3" />
              <text x="550" y="108" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold" stroke="#222" strokeWidth="2" paintOrder="stroke" style={{filter:'drop-shadow(0 1px 2px #0008)'}}>Validación</text>
              {/* Resultado */}
              <circle cx="750" cy="100" r="34" fill="#181825" stroke="#fff" strokeWidth="3" />
              <text x="750" y="108" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold" stroke="#222" strokeWidth="2" paintOrder="stroke" style={{filter:'drop-shadow(0 1px 2px #0008)'}}>Resultado</text>
              {/* Flechas: más grandes, animadas y apuntando a la derecha */}
              {/* Entrada → IA */}
              <line x1="184" y1="100" x2="316" y2="100" stroke="url(#lineGradient)" strokeWidth="4" />
              <g transform="translate(238,100)">
                <polygon points="5,0 -5,-8 -5,8" fill="#00e0ff" />
              </g>
              {/* IA → Validación */}
              <line x1="384" y1="100" x2="516" y2="100" stroke="url(#lineGradient)" strokeWidth="4" />
              <g transform="translate(438,100)">
                <polygon points="5,0 -5,-8 -5,8" fill="#00ffb4" />
              </g>
              {/* Validación → Resultado */}
              <line x1="584" y1="100" x2="716" y2="100" stroke="url(#arrowGradient)" strokeWidth="4" />
              <g transform="translate(638,100)">
                <polygon points="5,0 -5,-8 -5,8" fill="#fff" />
              </g>
            </svg>
          </div>
          <div className="text-white font-bold text-base mt-4 animate-fade-in-up" style={{ animationDelay: '0.7s', textShadow: '0 2px 8px #000a' }}>
            Flujos de trabajo inteligentes: Entrada &rarr; IA &rarr; Validación &rarr; Resultado
          </div>
        </div>
        {/* Así de Simple Funciona */}
        <section className="w-full mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Así de Simple Funciona</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {/* Paso 1 */}
            <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col items-center relative hover-glow hover-scale transition-all">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-primary glow-primary animate-float">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <svg className="w-12 h-12 text-primary mb-4 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4H7a4 4 0 00-4 4v6z" />
              </svg>
              <div className="text-2xl font-bold text-white mb-2 text-center">Elige tu Plan</div>
              <div className="text-white/80 text-center text-base">Selecciona el paquete de automatización que mejor se adapte a tus necesidades.</div>
            </div>
            {/* Paso 2 */}
            <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col items-center relative hover-glow hover-scale transition-all">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-primary glow-primary animate-float">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <svg className="w-12 h-12 text-primary mb-4 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M12 4v16" />
              </svg>
              <div className="text-2xl font-bold text-white mb-2 text-center">Personaliza</div>
              <div className="text-white/80 text-center text-base">Ajustamos las herramientas IA a tus procesos y objetivos específicos.</div>
            </div>
            {/* Paso 3 */}
            <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col items-center relative hover-glow hover-scale transition-all">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-primary glow-primary animate-float">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <svg className="w-12 h-12 text-primary mb-4 mt-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="text-2xl font-bold text-white mb-2 text-center">Despliega y Crece</div>
              <div className="text-white/80 text-center text-base">Implementamos la solución y observa cómo tu negocio se transforma.</div>
            </div>
          </div>
        </section>
        {/* Plug & Play - reemplazado por bloque descriptivo */}
        <div id="outOfTheBox" className="rounded-xl py-20 px-6 bg-white/10 border border-white/20 shadow-xl flex flex-col items-center animate-slide-in-up mb-12" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Soluciones Listas para Usar</h2>
          <p className="text-lg md:text-xl mb-8 text-white text-center max-w-2xl">
            Contamos con una variedad de soluciones plug & play para automatizar tu negocio desde el primer día. Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de la eficiencia y el poder de la inteligencia artificial sin complicaciones técnicas.
          </p>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
            <div className="flex-1 bg-white/20 border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs">
              <div className="text-2xl font-bold mb-2">Básico</div>
              <div className="text-3xl font-extrabold text-white mb-2">$29.99<span className="text-base font-normal">/mes</span></div>
              <ul className="text-white/80 text-sm mb-4 list-disc list-inside text-left">
                <li>Automatización esencial</li>
                <li>Soporte estándar</li>
                <li>Integración rápida</li>
              </ul>
            </div>
            <div className="flex-1 bg-white/20 border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs">
              <div className="text-2xl font-bold mb-2">Pro</div>
              <div className="text-3xl font-extrabold text-white mb-2">$49.99<span className="text-base font-normal">/mes</span></div>
              <ul className="text-white/80 text-sm mb-4 list-disc list-inside text-left">
                <li>Todo lo del Básico</li>
                <li>Más integraciones</li>
                <li>Soporte prioritario</li>
              </ul>              
            </div>
            <div className="flex-1 bg-white/20 border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs">
              <div className="text-2xl font-bold mb-2">Premium</div>
              <div className="text-3xl font-extrabold text-white mb-2">$99.99<span className="text-base font-normal">/mes</span></div>
              <ul className="text-white/80 text-sm mb-4 list-disc list-inside text-left">
                <li>Todo lo del Pro</li>
                <li>Personalización avanzada</li>
                <li>Soporte 24/7</li>
              </ul>

            </div>
          </div>
          {/* Botón de registro */}
          <div className="mt-10 w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow text-lg w-full md:w-auto">
                  ¡Regístrate y automatiza ahora!
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="px-8 py-3 bg-info text-white font-bold rounded-lg shadow hover:bg-info/80 transition hover-glow animate-pulse-glow text-lg w-full md:w-auto">
                  ¿Ya tienes cuenta? Inicia sesión
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        {/* Métricas destacadas */}
        <div className="rounded-xl flex flex-col animate-slide-in-up" style={{ animationDelay: '1.6s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Métricas Avanzadas
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {/* Tarjetas de métricas (100% en móvil, 70% en md+) */}
            <div className="flex flex-col md:flex-row flex-1 md:basis-7/10 gap-8 w-full">
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
            {/* El párrafo explicativo: debajo en móvil, a la derecha en desktop */}
            <p className="text-white card bg-white/10 backdrop-blur-md border border-white/20 p-5 h-full flex items-center justify-end text-right hover-scale hidden md:flex md:w-1/3">
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
        {/* Bloque combinado: Automatización Personalizada + Consultoría */}
        <div className="w-full max-w-5xl mx-auto mt-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 animate-fade-in-scale">
          {/* Gráficos/íconos */}
          <div className="flex flex-row md:flex-col gap-8 items-center md:items-start flex-1">
            <div className="flex flex-col items-center">
              <span className="bg-primary/20 p-4 rounded-full mb-2 shadow-lg">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <span className="text-white font-bold text-lg text-center">Automatización a tu medida</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-info/20 p-4 rounded-full mb-2 shadow-lg">
                <svg className="w-12 h-12 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" />
                </svg>
              </span>
              <span className="text-white font-bold text-lg text-center">Consultoría experta en IA</span>
            </div>
          </div>
          {/* Invitaciones a la acción */}
          <div className="flex flex-col gap-6 items-center flex-1">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-white text-center">¿Listo para transformar tu empresa?</span>
              <span className="text-lg text-white/80 text-center">Soluciones personalizadas y asesoría de alto nivel</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
              <a href="/contacto" className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow text-lg text-center w-full md:w-auto animate-pulse-glow">Solicita tu automatización</a>
              <a href="/contacto" className="px-8 py-4 bg-info text-white font-bold rounded-lg shadow hover:bg-info/80 transition hover-glow text-lg text-center w-full md:w-auto animate-pulse-glow">Agenda consultoría</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
