import type { StepBaseProps } from "@/interfaces/stepProps.interface";
import type { PagoStepData } from "@/interfaces/stepProps.interface";
import { useEffect } from "react";

export default function StepPago({ data, setData, onValidationChange }: Readonly<StepBaseProps<PagoStepData>>) {
  const isFormValid = Boolean(
    data.nombre && data.tarjeta && data.vencimiento && data.cvc
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-white mb-2">Datos de Pago</h1>
        <p className="text-white text-sm">Completa la información de tu método de pago para activar tu cuenta.</p>
      </div>
      <form className="flex flex-col gap-3">
        <input
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          className="input input-bordered input-sm w-full"
          placeholder="Nombre del titular"
          required
        />
        <input
          name="tarjeta"
          value={data.tarjeta}
          onChange={handleChange}
          className="input input-bordered input-sm w-full"
          placeholder="Número de tarjeta"
          required
          maxLength={19}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            name="vencimiento"
            value={data.vencimiento}
            onChange={handleChange}
            className="input input-bordered input-sm w-full"
            placeholder="MM/AA"
            required
            maxLength={5}
          />
          <input
            name="cvc"
            value={data.cvc}
            onChange={handleChange}
            className="input input-bordered input-sm w-full"
            placeholder="CVC"
            required
            maxLength={4}
          />
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className={`w-3 h-3 rounded-full ${isFormValid ? "bg-success" : "bg-base-300"}`}></div>
          <span className={`text-xs ml-2 ${isFormValid ? "text-success" : "text-white"}`}>
            {isFormValid ? "Datos de pago completos" : "Completa todos los campos"}
          </span>
        </div>
      </form>
    </div>
  );
}
