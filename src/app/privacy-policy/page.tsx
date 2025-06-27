import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import React, { Suspense } from "react";
import { FaShieldAlt } from "react-icons/fa";

function Skeleton() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center mt-24 animate-pulse">
      <div className="w-1/2 h-10 bg-base-200 rounded mb-6" />
      <div className="w-full h-6 bg-base-200 rounded mb-4" />
      <div className="w-full h-32 bg-base-200 rounded-xl mb-6" />
      <div className="w-full h-32 bg-base-200 rounded-xl mb-6" />
      <div className="w-full h-32 bg-base-200 rounded-xl mb-6" />
      <div className="w-1/2 h-8 bg-base-200 rounded" />
    </section>
  );
}

function PrivacyPolicyContent() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 mt-24 mb-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up">
      <div className="flex flex-col items-center mb-8">
        <span className="bg-primary/20 p-4 rounded-full mb-4 shadow-lg animate-float">
          <FaShieldAlt className="text-4xl text-primary" />
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Política de Privacidad</h1>
        <p className="text-white text-center max-w-xl mb-2">Tu privacidad y la seguridad de tus datos son nuestra prioridad. Lee cómo protegemos y gestionamos tu información en Guayoyo.</p>
      </div>
      <div className="w-full">
        <PrivacyPolicy />
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
