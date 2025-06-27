"use client";
import { useState, useEffect } from "react";
import StepUsuario from "@/components/steps/StepUsuario";
import StepEmpresa from "@/components/steps/StepEmpresa";
import StepInstancias from "@/components/steps/StepInstancias";
import StepCredenciales from "@/components/steps/StepCredenciales";
import StepPago from "@/components/steps/StepPago";
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

export default function OnboardingPage() {
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
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="hero bg-base-200 min-h-screen pt-20 flex items-center justify-center relative overflow-hidden pb-0 mb-0">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to top, oklch(47% 0.145 313 / 0.45) 0%, oklch(47% 0.145 313 / 0.20) 35%, oklch(47% 0.145 313 / 0.07) 60%, transparent 80%)",
          height: "100%",
          width: "100%",
        }}
      />
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
                onClick={() => setActiveStep(idx)}
                aria-label={step.label}
                disabled={idx > activeStep}
              >
                {idx + 1}
              </button>
              {idx < steps.length - 1 && (
                <div className="w-8 h-1 bg-base-300 mx-1 rounded" />
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-xl mx-auto">
          <StepComponent {...stepProps} />
        </div>
      </div>
    </div>
  );
}
