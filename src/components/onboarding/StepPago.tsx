import { StepProps } from "@/interfaces/stepProps.interface";
import { useState } from "react";

export default function StepPago(stepProps: Readonly<StepProps>) {
  const [form, setForm] = useState({
    nombre: "",
    tarjeta: "",
    vencimiento: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stepProps.onNext();
  };

  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">Datos de Pago</h1>
      <form className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="nombre" value={form.nombre} onChange={handleChange} className="input input-bordered w-full" placeholder="Nombre del titular" required />
        <input name="tarjeta" value={form.tarjeta} onChange={handleChange} className="input input-bordered w-full" placeholder="Número de tarjeta" required maxLength={19} />
        <input name="vencimiento" value={form.vencimiento} onChange={handleChange} className="input input-bordered w-full" placeholder="MM/AA" required maxLength={5} />
        <input name="cvc" value={form.cvc} onChange={handleChange} className="input input-bordered w-full" placeholder="CVC" required maxLength={4} />
        <button type="submit" className="btn btn-primary font-bold mt-2">Finalizar</button>
      </form>
    </div>
  );
}
