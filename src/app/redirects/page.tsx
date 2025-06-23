"use client";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const token = searchParams.get("code");

  return <div>Página de redirección...{token}</div>;
}
