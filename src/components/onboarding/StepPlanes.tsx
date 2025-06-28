import type { StepBaseProps } from "@/interfaces/stepProps.interface";
import { useEffect } from "react";

const PLANES = [
  { label: "Básico", value: "basico", descripcion: "Ideal para comenzar. Incluye funciones esenciales.", precio: 29.99 },
  { label: "Pro", value: "pro", descripcion: "Para empresas en crecimiento. Más integraciones y soporte.", precio: 49.99 },
  { label: "Premium", value: "premium", descripcion: "Todo incluido, máxima personalización y soporte prioritario.", precio: 99.99 },
];

export default function StepPlanes({ data, setData, onValidationChange }: Readonly<StepBaseProps<string>>) {
  const isFormValid = Boolean(data);

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-white mb-2">Selecciona tu plan</h1>
        <p className="text-white text-sm">Elige el plan que mejor se adapte a tus necesidades.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {PLANES.map((plan) => (
          <label
            key={plan.value}
            className={`flex flex-col items-center gap-2 p-6 rounded-xl border-2 cursor-pointer transition-all shadow-md
              ${data === plan.value ? "border-primary bg-primary/10" : "border-white/20 bg-white/5 hover:border-primary/60"}`}
          >
            <input
              type="radio"
              name="plan"
              value={plan.value}
              checked={data === plan.value}
              onChange={() => setData(plan.value)}
              className="radio radio-primary mb-2"
            />
            <div className="text-xl font-bold text-white mb-1">{plan.label}</div>
            <div className="text-primary text-2xl font-bold mb-1">${plan.precio}/mes</div>
            <div className="text-white/80 text-sm text-center">{plan.descripcion}</div>
          </label>
        ))}
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className={`w-3 h-3 rounded-full ${isFormValid ? "bg-success" : "bg-base-300"}`}></div>
        <span className={`text-xs ml-2 ${isFormValid ? "text-success" : "text-white"}`}>
          {isFormValid ? "Plan seleccionado" : "Selecciona un plan para continuar"}
        </span>
      </div>
    </div>
  );
} 