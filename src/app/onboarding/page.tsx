"use client";
import { useState, useEffect, Suspense } from "react";
import StepUsuario from "@/components/onboarding/StepUsuario";
import StepEmpresa from "@/components/onboarding/StepEmpresa";
import StepInstancias from "@/components/onboarding/StepInstancias";
import StepCredenciales from "@/components/onboarding/StepCredenciales";
import StepPago from "@/components/onboarding/StepPago";
import { StepProps } from "@/interfaces/stepProps.interface";
import { useUser } from "@clerk/nextjs";
import { UserData } from "@/interfaces/userData.interface";
import { ClientData } from "@/interfaces/clientData.interface";

const steps = [
  { label: "Datos Usuario", component: StepUsuario },
  { label: "Datos Empresa", component: StepEmpresa },
  { label: "Seleccionar Instancias", component: StepInstancias },
  { label: "Configurar Credenciales", component: StepCredenciales },
  { label: "Pago", component: StepPago },
];

function OnboardingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen animate-pulse">
      <div className="flex gap-2 mb-8">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className="w-8 h-8 bg-base-200 rounded-full" />
        ))}
      </div>
      <div className="w-full max-w-xl mx-auto bg-base-200 h-96 rounded-xl" />
    </div>
  );
}

function OnboardingContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState<UserData>();
  const [clientData, setClientData] = useState<ClientData>();
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    async function checkUserAndClient() {
      const email = user?.primaryEmailAddress?.emailAddress ?? "";
      if (!email) return setLoading(false);
      try {
        const res = await fetch(`/api/user?email=${email}`);
        const data = await res.json();
        if (data.exists) {
          setUserData(data.data);
          setActiveStep(1);
          try {
            const clientRes = await fetch(
              `/api/client/user?userId=${data.data.id}`
            );
            const clientData = await clientRes.json();
            if (clientData.exists) {
              setClientData(clientData.data);
              setActiveStep(2);
            } else {
              setClientData(undefined);
            }
          } catch (error) {
            console.error("Error al obtener el cliente:", error);
          }
        } else {
          setUserData(undefined);
        }
      } catch (e) {
        console.error("Error al verificar el usuario:", e);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      checkUserAndClient();
    } else setLoading(false);
  }, [user]);

  const stepProps: StepProps = {
    onNext: () => setActiveStep((s) => Math.min(s + 1, steps.length - 1)),
    onBack: () => setActiveStep((s) => Math.max(s - 1, 0)),
    isLast: activeStep === steps.length - 1,
    isFirst: activeStep === 0,
    clerkEmail: user?.primaryEmailAddress?.emailAddress ?? "",
    clerkFullName: user?.fullName ?? "",
    userData: userData,
    clientData: clientData,
  };

  const StepComponent = steps[activeStep].component;

  if (loading) {
    return (
      <OnboardingSkeleton />
    );
  }

  return (
    <div className="hero bg-base-100/10 min-h-screen pt-20 flex items-center justify-center relative overflow-hidden pb-0 mb-0">
      <div className="hero-content text-center w-full flex flex-col items-center px-4 relative z-10">
        <div className="flex justify-center">
          {steps.map((step, idx) => (
            <div key={step.label} className="flex items-center">
              <button
                type="button"
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                  idx === activeStep
                    ? "bg-primary text-white border-primary"
                    : "bg-base-100 border-base-200 text-base-content"
                }`}
              >
                {idx + 1}
              </button>
              {idx < steps.length - 1 && (
                <div className="w-8 h-0.5 bg-base-200 mx-2" />
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-xl mx-auto mt-8">
          <StepComponent {...stepProps} />
        </div>
      </div>
    </div>
  );
}

export default function Onboarding() {
  return (
    <Suspense fallback={<OnboardingSkeleton />}>
      <OnboardingContent />
    </Suspense>
  );
}