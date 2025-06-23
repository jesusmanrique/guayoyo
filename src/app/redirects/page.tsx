"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RedirectContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("code");
  return <div>Página de redirección...{token}</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RedirectContent />
    </Suspense>
  );
}
