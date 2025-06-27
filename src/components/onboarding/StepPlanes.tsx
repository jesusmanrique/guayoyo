import { StepPlanesProps } from "@/interfaces/stepProps.interface";
import { useEffect } from "react";

const PLANES = [
  { label: "Básico", value: "basico", descripcion: "Ideal para comenzar. Incluye funciones esenciales." },
  { label: "Pro", value: "pro", descripcion: "Para empresas en crecimiento. Más integraciones y soporte." },
  { label: "Premium", value: "premium", descripcion: "Todo incluido, máxima personalización y soporte prioritario." },
];

export default function StepPlanes({ data, setData, onValidationChange }: Readonly<StepPlanesProps>) {
  const isFormValid = Boolean(data);

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-info mb-2">Selecciona tu plan</h1>
        <p className="text-white/80 text-sm">Elige el plan que mejor se adapte a tus necesidades.</p>
      </div>
      <form className="flex flex-col gap-4">
        {PLANES.map((plan) => (
          <label key={plan.value} className={`flex items-center gap-4 p-4 rounded-lg border border-white/10 cursor-pointer transition-colors ${data === plan.value ? "bg-primary/10 border-primary" : "hover:bg-white/5"}`}>
            <input
              type="radio"
              name="plan"
              value={plan.value}
              checked={data === plan.value}
              onChange={() => setData(plan.value)}
              className="radio radio-primary"
            />
            <div>
              <div className="font-semibold text-white">{plan.label}</div>
              <div className="text-xs text-white/70">{plan.descripcion}</div>
            </div>
          </label>
        ))}
        <div className="flex items-center justify-center mt-2">
          <div className={`w-3 h-3 rounded-full ${isFormValid ? "bg-success" : "bg-base-300"}`}></div>
          <span className={`text-xs ml-2 ${isFormValid ? "text-success" : "text-base-content/60"}`}>
            {isFormValid ? "Plan seleccionado" : "Selecciona un plan para continuar"}
          </span>
        </div>
      </form>
    </div>
  );
} 