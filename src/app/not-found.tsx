import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100/80">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-2">Página no encontrada</h2>
      <p className="text-white/80 mb-6 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida. Si crees que esto es un error, por favor contáctanos.
      </p>
      <Link href="/" className="btn btn-primary font-bold">Volver al inicio</Link>
    </div>
  );
} 