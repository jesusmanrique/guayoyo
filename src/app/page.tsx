import ChatbotWidget from "@/components/ChatbotWidget";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import Beneficios from "@/components/Beneficios";

export const metadata: Metadata = {
  title: "Servicios de Automatización | Guayoyo",
  description:
    "Descubre nuestras soluciones de IA para optimizar procesos empresariales",
  alternates: {
    canonical: "https://wwww.guayoyoa.tech",
  },
  openGraph: {
    title: "Servicios de Automatización | Guayoyo",
    description: "Soluciones avanzadas de IA para tu negocio",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Beneficios />
      <ChatbotWidget />

      <footer className="w-full bg-base-300 py-6 mt-10 flex flex-col items-center">
        <div className="flex gap-6 mb-2">
          <a
            href="https://instagram.com/guayoyoagencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-amber-400 transition"
            aria-label="Instagram"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.783 2.295 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.392 3.678 1.373c-.98.98-1.242 2.092-1.301 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.321 2.393 1.301 3.373.98.98 2.092 1.242 3.373 1.301C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.321 3.373-1.301.98-.98 1.242-2.092 1.301-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.321-2.393-1.301-3.373-.98-.98-2.092-1.242-3.373-1.301C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href="https://wa.me/584142074541"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-500 transition"
            aria-label="WhatsApp"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.96 9.96 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.44.02 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 5.02 4.22.7.24 1.24.38 1.67.49.7.18 1.34.15 1.84.09.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
            </svg>
          </a>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Guayoyo. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}
