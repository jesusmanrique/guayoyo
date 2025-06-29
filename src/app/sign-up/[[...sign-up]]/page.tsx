import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-24">
      <div className="max-w-md w-full mx-4">
        <div className="relative bg-gradient-to-br from-white/15 via-[#1a2a3a]/30 to-[#3ee6ff]/10 border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-[#5caaff]/10 via-transparent to-[#3ee6ff]/10 blur-xl opacity-60" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
              Crear Cuenta
            </h1>
            <p className="text-center text-white/70 mb-8 text-lg leading-relaxed">
              Crea tu cuenta para acceder a nuestras soluciones de automatización
              con IA y descubre cómo podemos transformar tu negocio.
            </p>
            <div className="w-full">
              <SignUp appearance={clerkAppearance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
