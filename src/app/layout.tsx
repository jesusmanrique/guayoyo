import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";
import ParticleBackground from "@/components/layout/ParticleBackground";
import { Suspense } from "react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guayoyo.tech"),
  title: {
    template: "%s | Guayoyo Agencia Digital",
    default: "Automatización con IA - Guayoyo Agencia Digital",
  },
  description:
    "Soluciones de automatización con IA para transformar tu negocio. +70% eficiencia, -45% errores.",
  keywords: ["automatización IA", "desarrollo software", "Venezuela"],
  openGraph: {
    title: "Guayoyo Agencia Digital",
    description: "Expertos en automatizaciones con IA",
    url: "https://guayoyoagencia.com",
    siteName: "Guayoyo Agencia Digital",
    images: [
      {
        url: "/guayoyoSvgGold.svg",
        alt: "Guayoyo Agencia Digital",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guayoyo Agencia Digital",
    description: "Transformamos negocios con IA",
    images: ["https://guayoyoagencia.tech/"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          card: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4",
          formButtonPrimary: "bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white font-bold rounded-full shadow hover:scale-105 glassmorph-btn",
          headerTitle: "text-info font-bold text-2xl mb-2",
          headerSubtitle: "text-base-content/80 mb-4",
          socialButtonsBlockButton: "bg-gradient-to-r from-[#5caaff] to-[#3ee6ff] text-white border border-white/40 rounded-full hover:scale-105 glassmorph-btn",
          footerAction: "text-base-content/60 mt-4",
          formFieldInput: "input input-bordered bg-base-200/40 text-white w-full",
          formFieldLabel: "text-info font-semibold mb-1",
          formFieldErrorText: "text-error text-sm mt-1",
          dividerText: "text-base-content/60 text-xs",
          identityPreview: "bg-base-200/40 border border-white/20 rounded-lg p-2",
          userButtonPopoverCard: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-4",
          userButtonPopoverFooter: "mt-10",
        },
        variables: {
          colorPrimary: "#6c63ff",
          colorBackground: "rgba(30,30,40,0.7)",
          colorText: "#fff",
          borderRadius: "1rem",
          fontSize: "1rem",
        },
      }}
      localization={esES}
    >
      <html lang="es" className={roboto.className} data-theme="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="scroll-gradient"></div>
          <ParticleBackground />
          <Nav />
          <main className="relative z-20">
            {children}
          </main>
          <Footer />
          <Analytics />
          <Suspense>
            <GoogleAnalytics />
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
