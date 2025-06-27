"use client";
import { useState } from "react";
import StepUsuario from "@/components/onboarding/StepUsuario";
import StepEmpresa from "@/components/onboarding/StepEmpresa";
import StepPago from "@/components/onboarding/StepPago";
import StepPlanes from "@/components/onboarding/StepPlanes";
import { useUser } from "@clerk/nextjs";

const ALL_INSTANCIAS = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Instagram", value: "instagram" },
  { label: "Telegram", value: "telegram" },
  { label: "Notion", value: "notion" },
  { label: "Jira", value: "jira" },
  { label: "Chatbot Web", value: "chatbot" },
];

const steps = [
  { label: "Datos Usuario" },
  { label: "Datos Empresa" },
  { label: "Seleccionar Plan" },
  { label: "Pago" },
];

export default function Onboarding() {
  const { user } = useUser();
  const [openPanel, setOpenPanel] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    usuario: { documento: "", cargo: "" },
    empresa: { nombre: "", rif: "", sector: "", tamano: "", direccion: "" },
    plan: "",
    pago: { nombre: "", tarjeta: "", vencimiento: "", cvc: "" },
  });

  // Validaciones de cada step
  const validUsuario = Boolean(onboardingData.usuario.documento && onboardingData.usuario.cargo);
  const validEmpresa = Boolean(onboardingData.empresa.nombre && onboardingData.empresa.rif && onboardingData.empresa.sector && onboardingData.empresa.tamano && onboardingData.empresa.direccion);
  const validPlan = Boolean(onboardingData.plan);
  const validPago = Boolean(onboardingData.pago.nombre && onboardingData.pago.tarjeta && onboardingData.pago.vencimiento && onboardingData.pago.cvc);
  const validSteps = [validUsuario, validEmpresa, validPlan, validPago];
  const allValid = validSteps.every(Boolean);

  // Handlers para actualizar cada parte del estado
  const setUsuario = (data: any) => setOnboardingData((prev) => ({ ...prev, usuario: data }));
  const setEmpresa = (data: any) => setOnboardingData((prev) => ({ ...prev, empresa: data }));
  const setPlan = (plan: string) => setOnboardingData((prev) => ({ ...prev, plan }));
  const setPago = (data: any) => setOnboardingData((prev) => ({ ...prev, pago: data }));

  return (
    <div className="min-h-screen bg-base-100/10 pt-20 pb-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-info mb-8">Onboarding Guayoyo</h1>
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
            <StepPago
              data={onboardingData.pago}
              setData={setPago}
            />
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
function AccordionPanel({ open, onClick, label, valid, children }: any) {
  return (
    <div className="border border-white/20 rounded-xl bg-white/5 shadow-md">
      <button
        type="button"
        className={`w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-lg transition-colors ${open ? "bg-primary/10" : ""}`}
        onClick={onClick}
      >
        <span>{label}</span>
        <span className={`ml-2 w-3 h-3 rounded-full ${valid ? "bg-success" : "bg-base-300"}`}></span>
      </button>
      {open && <div className="p-4 pt-2">{children}</div>}
    </div>
  );
}