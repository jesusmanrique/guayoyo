import { StepProps } from "@/interfaces/stepProps.interface";
import { useState } from "react";

export default function StepEmpresa(stepProps: Readonly<StepProps>) {
  const [form, setForm] = useState({
    nombre: "",
    rif: "",
    sector: "",
    tamano: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stepProps.onNext();
  };

  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">
        Continuamos!!{" "}
        <span className="text-primary">
          {stepProps.userData?.full_name?.split(" ")[0] ?? ""}
        </span>
      </h1>
      <p className="mb-4">Por favor completa la información asociada a tu empresa.</p>
      <form className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="nombre" value={form.nombre} onChange={handleChange} className="input input-bordered w-full" placeholder="Nombre de la empresa" required />
        <input name="rif" value={form.rif} onChange={handleChange} className="input input-bordered w-full" placeholder="RIF" required />
        <input name="sector" value={form.sector} onChange={handleChange} className="input input-bordered w-full" placeholder="Sector" required />
        <select name="tamano" value={form.tamano} onChange={handleChange} className="input input-bordered w-full" required>
          <option value="">Tamaño de la empresa</option>
          <option value="micro">Micro</option>
          <option value="pequeña">Pequeña</option>
          <option value="mediana">Mediana</option>
          <option value="grande">Grande</option>
        </select>
        <input name="direccion" value={form.direccion} onChange={handleChange} className="input input-bordered w-full" placeholder="Dirección" required />
        <button type="submit" className="btn btn-primary font-bold mt-2">Siguiente</button>
      </form>
    </div>
  );
}
