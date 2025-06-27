import Link from "next/link";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

import {
  FaUserPlus,
  FaUserEdit,
  FaBuilding,
  FaCogs,
  FaKey,
  FaCreditCard,
  FaCheckCircle,
  FaRegClock,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaWpforms,
  FaBrain,
} from "react-icons/fa";

const plugAndPlaySteps = [
  {
    icon: <FaUserPlus className="text-2xl text-primary" />,
    title: "Regístrate:",
    description:
      "Crea tu cuenta en solo segundos y accede al panel de control de Guayoyo.tech.",
  },
  {
    icon: <FaUserEdit className="text-2xl text-info" />,
    title: "Completa los datos de tu usuario:",
    description: "Cuéntanos un poco sobre ti para personalizar tu experiencia.",
  },
  {
    icon: <FaBuilding className="text-2xl text-accent" />,
    title: "Crea el perfil de tu empresa",
    description:
      "Agrega la información clave para adaptar nuestras soluciones a tu negocio.",
  },
  {
    icon: <FaCogs className="text-2xl text-success" />,
    title: "Selecciona las instancias que usarás:",
    description:
      "Elige fácilmente los módulos y servicios que tu empresa necesita. ¡todo bajo control!",
  },
  {
    icon: <FaKey className="text-2xl text-warning" />,
    title: "Configura las credenciales correspondientes:",
    description:
      "Asegura tus conexiones y servicios ingresando las credenciales requeridas de manera segura.",
  },
  {
    icon: <FaCreditCard className="text-2xl text-error" />,
    title: "Suministra un medio de pago:",
    description:
      "Agrega tu método de pago preferido para activar tus servicios sin demoras.",
  },
  {
    icon: <FaCheckCircle className="text-2xl text-success" />,
    title: "Al procesarse el pago, estás ¡Listo!: ",
    description:
      "¡Disfruta del poder de la tecnología Guayoyo.tech desde el primer momento!",
  },
];

const personalizadasSteps = [
  {
    icon: <FaWpforms className="text-2xl text-primary" />,
    title: "Completa el formulario con tus datos:",
    description:
      "Facilítanos tu información de contacto y resumen de lo que deseas automatizar.",
  },
  {
    icon: <FaBrain className="text-2xl text-info" />,
    title: "Describe tus procesos:",
    description:
      "Cuéntanos detalladamente qué proceso(s) deseas optimizar o digitalizar.",
  },
  {
    icon: <FaRegClock className="text-2xl text-info" />,
    title:
      "Espera a ser contactado por nuestro equipo en un lapso no mayor a 24h:",
    description:
      "Uno de nuestros expertos te llamará rápidamente para avanzar en tu solicitud.",
  },
  {
    icon: <FaCalendarAlt className="text-2xl text-accent" />,
    title: "Agenda una reunión donde haremos drill down de la solicitud:",
    description:
      "Nos reunimos contigo para entender cada detalle y asegurarnos de captar exactamente lo que necesitas.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-2xl text-warning" />,
    title: "Recibe y aprueba el presupuesto:",
    description:
      "Obtén nuestra propuesta personalizada y transaparente, lista para tu aprobación.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-2xl text-success" />,
    title: "Cancela el 50% al iniciar tu proyecto:",
    description:
      "Realiza el primer pago para comenzar a desarrollar tu automatización a medida.",
  },
  {
    icon: <FaCheckCircle className="text-2xl text-success" />,
    title: "¡Tu automatización personalizada está en marcha!",
    description:
      "Cuando tengas tu solución final entregada y validada, realizas el segundo pago con total confianza.",
  },
];

export default function Proceso() {
  return (
    <section
      id="procesos"
      className="relative w-screen max-w-none left-1/2 -translate-x-1/2 py-32 px-0 flex flex-col items-center gap-16 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Fondo base muy sutil */}
      <div className="absolute inset-0 bg-base-200/20 pointer-events-none z-0"></div>
      
      {/* Gradiente decorativo con animación - más transparente */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-full pointer-events-none z-0 gradient-animated opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, oklch(47% 0.145 313 / 0.25) 0%, oklch(47% 0.145 313 / 0.10) 35%, oklch(47% 0.145 313 / 0.05) 60%, transparent 80%)",
        }}
      />
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center  px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-info glow-text animate-slide-in-up">
          ¡Descubre cómo Guayoyo.tech impulsa el futuro digital de tu empresa!
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          ¿Listo para dar el siguiente paso hacia la eficiencia?
        </h3>
        <p className="text-lg text-base-content/80 text-center max-w-2xl mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          En Guayoyo.tech hemos hecho que la transformación digital sea tan
          simple como un par de clics. Elige tu flujo ideal y lleva tu negocio
          al siguiente nivel:
        </p>
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Plug and Play */}
          <div className=" rounded-xl flex flex-col items-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-accent mb-6 glow-text">
              Plug & Play!
            </h3>
            <ol className="flex flex-col gap-6 w-full">
              {plugAndPlaySteps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg group transition hover:scale-105 hover:shadow-xl hover-scale animate-fade-in-scale"
                  style={{
                    animationDelay: `${i * 0.12 + 0.8}s`,
                  }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition glow-primary">
                    {step.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-base text-white">{step.title}</div>
                    <div className="text-sm text-white/90">
                      {step.description}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* Automatizaciones Personalizadas */}
          <div className=" flex flex-col items-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-accent mb-6 glow-text">
              Automatizaciones Personalizadas
            </h3>
            <ol className="flex flex-col gap-6 w-full">
              {personalizadasSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg group transition hover:scale-105 hover:shadow-xl hover-scale animate-fade-in-scale"
                  style={{
                    animationDelay: `${i * 0.12 + 0.8}s`,
                  }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition glow-secondary">
                    {step.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-base text-white">{step.title}</div>
                    <div className="text-sm text-white/90">
                      {step.description}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-xl font-semibold text-center text-success glow-text">
            ¡Da el primer paso y automatiza tu negocio hoy!
          </p>
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary/80 transition hover-glow animate-pulse-glow">
                Regístrate gratis
              </button>
            </SignUpButton>
          </SignedOut>
          <Link
            href="#contacto"
            className="px-8 py-3 bg-secondary font-bold rounded-lg shadow hover:bg-base-200 transition"
          >
            ¿Prefieres que te contactemos?
          </Link>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 40px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) both;
          }
          .animate-fade-in-slow {
            animation: fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) both;
          }
          .animate-slide-up {
            animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both;
          }
        `}
      </style>
    </section>
  );
}
