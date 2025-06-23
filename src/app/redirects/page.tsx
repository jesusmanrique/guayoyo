"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    // Esto se ejecuta cuando el query está listo
    if (router.isReady) {
      const { code } = router.query;
      // code = el valor de tu token
      console.log("Token:", code);
      // Puedes usar "code" aquí como token
    }
  }, [router.isReady, router.query]);

  return <div>Página de redirección...</div>;
}
