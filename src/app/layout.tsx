import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" data-theme="night">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
