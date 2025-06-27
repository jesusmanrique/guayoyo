"use client";
import { useState, useEffect } from "react";
import StepUsuario from "@/components/onboarding/StepUsuario";
import StepEmpresa from "@/components/onboarding/StepEmpresa";
import StepPago from "@/components/onboarding/StepPago";
import StepPlanes from "@/components/onboarding/StepPlanes";
import StripeProvider from "@/components/providers/StripeProvider";
import { useUser } from "@clerk/nextjs";

// Definir los tipos de datos para cada parte del estado
interface UsuarioData { documento: string; cargo: string; }
interface EmpresaData { nombre: string; rif: string; sector: string; tamano: string; direccion: string; }

const PLANES = [
  { value: "basico", precio: 29.99 },
  { value: "pro", precio: 49.99 },
  { value: "premium", precio: 99.99 },
];

export default function Onboarding() {
  const { user } = useUser();
  const [openPanel, setOpenPanel] = useState(0);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [onboardingData, setOnboardingData] = useState({
    usuario: { documento: "", cargo: "" },
    empresa: { nombre: "", rif: "", sector: "", tamano: "", direccion: "" },
    plan: "",
  });

  // Validaciones de cada step
  const validUsuario = Boolean(onboardingData.usuario.documento && onboardingData.usuario.cargo);
  const validEmpresa = Boolean(onboardingData.empresa.nombre && onboardingData.empresa.rif && onboardingData.empresa.sector && onboardingData.empresa.tamano && onboardingData.empresa.direccion);
  const validPlan = Boolean(onboardingData.plan);
  const validPago = Boolean(clientSecret); // Cambiado para usar clientSecret de Stripe
  const validSteps = [validUsuario, validEmpresa, validPlan, validPago];
  const allValid = validSteps.every(Boolean);

  // Handlers para actualizar cada parte del estado
  const setUsuario = (data: UsuarioData) => setOnboardingData((prev) => ({ ...prev, usuario: data }));
  const setEmpresa = (data: EmpresaData) => setOnboardingData((prev) => ({ ...prev, empresa: data }));
  const setPlan = (plan: string) => {
    setOnboardingData((prev) => ({ ...prev, plan }));
    setClientSecret(""); // Reiniciar el clientSecret al cambiar de plan
  };

  // Obtener el clientSecret de Stripe cuando el usuario llegue al paso de pago y haya seleccionado un plan
  useEffect(() => {
    if (openPanel === 3 && onboardingData.plan) {
      setLoadingPayment(true);
      const planSeleccionado = PLANES.find(p => p.value === onboardingData.plan);
      if (!planSeleccionado) {
        setLoadingPayment(false);
        return;
      }
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: planSeleccionado.precio,
          currency: "usd",
          metadata: {
            plan: onboardingData.plan,
            userEmail: user?.primaryEmailAddress?.emailAddress || "user@example.com",
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .finally(() => setLoadingPayment(false));
    } else {
      setClientSecret("");
      setLoadingPayment(false);
    }
  }, [openPanel, onboardingData.plan, user]);

  return (
    <div className="min-h-screen bg-base-100/10 pt-20 pb-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">Onboarding Guayoyo</h1>
        <div className="space-y-4">
          {/* Panel 1: Usuario */}
          <AccordionPanel
            open={openPanel === 0}
            onClick={() => setOpenPanel(openPanel === 0 ? -1 : 0)}
            label={"Datos Usuario"}
            valid={validUsuario}
          >
            <StepUsuario
              data={onboardingData.usuario}
              setData={setUsuario}
              clerkEmail={user?.primaryEmailAddress?.emailAddress ?? ""}
              clerkFullName={user?.fullName ?? ""}
            />
          </AccordionPanel>
          {/* Panel 2: Empresa */}
          <AccordionPanel
            open={openPanel === 1}
            onClick={() => setOpenPanel(openPanel === 1 ? -1 : 1)}
            label={"Datos Empresa"}
            valid={validEmpresa}
          >
            <StepEmpresa
              data={onboardingData.empresa}
              setData={setEmpresa}
            />
          </AccordionPanel>
          {/* Panel 3: Planes */}
          <AccordionPanel
            open={openPanel === 2}
            onClick={() => setOpenPanel(openPanel === 2 ? -1 : 2)}
            label={"Seleccionar Plan"}
            valid={validPlan}
          >
            <StepPlanes
              data={onboardingData.plan}
              setData={setPlan}
            />
          </AccordionPanel>
          {/* Panel 4: Pago */}
          <AccordionPanel
            open={openPanel === 3}
            onClick={() => setOpenPanel(openPanel === 3 ? -1 : 3)}
            label={"Pago"}
            valid={validPago}
          >
            {loadingPayment || !clientSecret ? (
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl text-center">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white">Inicializando sistema de pago...</p>
              </div>
            ) : (
              <StripeProvider clientSecret={clientSecret}>
                <StepPago
                  precio={PLANES.find(p => p.value === onboardingData.plan)?.precio}
                  empresaData={{
                    nombre: onboardingData.empresa.nombre,
                    direccion: onboardingData.empresa.direccion,
                  }}
                  onValidationChange={(isValid) => {
                    // Aquí podrías manejar la validación del pago
                    console.log('Pago validation changed:', isValid);
                  }}
                />
              </StripeProvider>
            )}
          </AccordionPanel>
        </div>
        <div className="flex justify-end mt-8">
          <button
            className="btn btn-primary btn-lg font-bold"
            disabled={!allValid}
            onClick={() => alert("¡Onboarding completado!\n" + JSON.stringify(onboardingData, null, 2))}
          >
            Finalizar Onboarding
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente AccordionPanel
type AccordionPanelProps = {
  open: boolean;
  onClick: () => void;
  label: string;
  valid: boolean;
  children: React.ReactNode;
};

function AccordionPanel({ open, onClick, label, valid, children }: AccordionPanelProps) {
  return (
    <div className="border border-white/20 rounded-xl bg-white/5 shadow-md">
      <button
        type="button"
        className={`w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-lg transition-colors ${open ? "bg-primary/10" : ""}`}
        onClick={onClick}
      >
        <span className="text-white">{label}</span>
        <span className={`ml-2 w-3 h-3 rounded-full ${valid ? "bg-success" : "bg-base-300"}`}></span>
      </button>
      {open && <div className="p-4 pt-2">{children}</div>}
    </div>
  );
}