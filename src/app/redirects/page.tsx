"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RedirectContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("code");
  return <div>Página de redirección...{token}</div>;
}

function Skeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-pulse">
      <div className="w-1/2 h-10 bg-base-200 rounded mb-6" />
      <div className="w-1/3 h-6 bg-base-200 rounded mb-4" />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <RedirectContent />
    </Suspense>
  );
}
