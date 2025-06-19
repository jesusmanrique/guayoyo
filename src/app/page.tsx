import ChatbotWidget from "@/components/ChatbotWidget";
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
      <Hero />
      <Beneficios />
      <ChatbotWidget />
    </>
  );
}
