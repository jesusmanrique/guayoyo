import type { StepBaseProps } from "@/interfaces/stepProps.interface";
import type { EmpresaStepData } from "@/interfaces/stepProps.interface";
import { useEffect } from "react";

export default function StepEmpresa({ data, setData, onValidationChange }: Readonly<StepBaseProps<EmpresaStepData>>) {
  const isFormValid = Boolean(
    data.nombre && data.rif && data.sector && data.tamano && data.direccion
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-white mb-2">Continuamos</h1>
        <p className="text-white text-sm">Por favor completa la información asociada a tu empresa.</p>
      </div>

      <form className="flex flex-col gap-3">
        <input 
          name="nombre" 
          value={data.nombre} 
          onChange={handleChange} 
          className="input input-bordered input-sm w-full" 
          placeholder="Nombre de la empresa" 
          required 
        />
        <input 
          name="rif" 
          value={data.rif} 
          onChange={handleChange} 
          className="input input-bordered input-sm w-full" 
          placeholder="RIF" 
          required 
        />
        <input 
          name="sector" 
          value={data.sector} 
          onChange={handleChange} 
          className="input input-bordered input-sm w-full" 
          placeholder="Sector" 
          required 
        />
        <select 
          name="tamano" 
          value={data.tamano} 
          onChange={handleChange} 
          className="select select-bordered select-sm w-full" 
          required
        >
          <option value="">Tamaño de la empresa</option>
          <option value="micro">Micro</option>
          <option value="pequeña">Pequeña</option>
          <option value="mediana">Mediana</option>
          <option value="grande">Grande</option>
        </select>
        <input 
          name="direccion" 
          value={data.direccion} 
          onChange={handleChange} 
          className="input input-bordered input-sm w-full" 
          placeholder="Dirección" 
          required 
        />

        {/* Indicador de validación */}
        <div className="flex items-center justify-center mt-2">
          <div className={`w-3 h-3 rounded-full ${
            isFormValid ? "bg-success" : "bg-base-300"
          }`}></div>
          <span className={`text-xs ml-2 ${
            isFormValid ? "text-success" : "text-white"
          }`}>
            {isFormValid ? "Formulario válido" : "Completa todos los campos"}
          </span>
        </div>
      </form>
    </div>
  );
}
