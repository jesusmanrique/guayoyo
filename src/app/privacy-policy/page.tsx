import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import React, { Suspense } from "react";

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
  return <PrivacyPolicy />;
}

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
