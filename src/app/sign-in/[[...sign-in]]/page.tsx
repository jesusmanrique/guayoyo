import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card md:w-1/3 max-w-md w-full card-body p-2 bg-base-200 rounded-lg shadow-md mt-20">
        <h1 className="card-title text-2xl font-bold text-center mb-2 text-neutral-content">
          Registro
        </h1>
        <p className="text-center text-sm mb-4">
          Inicia sesión para acceder a nuestras soluciones de automatización con
          IA y descubre cómo podemos transformar tu negocio.
        </p>
        <div className="w-full card-actions justify-center mb-8">
          <SignIn appearance={clerkAppearance} />
        </div>
      </div>
    </div>
  );
}
