"use client";
import { StepUsuarioProps } from "@/interfaces/stepProps.interface";
import { useEffect, useState } from "react";

export default function StepUsuario({ data, setData, onValidationChange, clerkFullName }: Readonly<StepUsuarioProps>) {
  const [docError, setDocError] = useState("");
  const [cargoError, setCargoError] = useState("");

  function validateDocumento(value: string) {
    const regex = /^[vepVEP]\d{2,9}$/;
    return regex.test(value);
  }

  function handleDocumentoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toUpperCase();
    setData({ ...data, documento: value });
    if (value === "" || validateDocumento(value)) {
      setDocError("");
    } else {
      setDocError("Debe iniciar por V, E o P seguido de 2 a 9 números. Ej: V123");
    }
  }

  function handleCargoChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setData({ ...data, cargo: e.target.value });
    if (e.target.value) setCargoError("");
  }

  function validateForm(): boolean {
    let valid = true;
    const documentoMayus = data.documento.toUpperCase();
    if (!validateDocumento(documentoMayus)) {
      setDocError("Debe iniciar por V, E o P seguido de 2 a 9 números. Ej: V123");
      valid = false;
    } else {
      setDocError("");
    }
    if (!data.cargo) {
      setCargoError("Debes seleccionar un cargo.");
      valid = false;
    } else {
      setCargoError("");
    }
    return valid;
  }

  const isFormValid = Boolean(data.documento && data.cargo && !docError && !cargoError);

  useEffect(() => {
    onValidationChange?.(isFormValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormValid]);

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-info mb-2">
          Bienvenido{" "}
          <span className="text-primary">{clerkFullName || "Usuario"}</span>
        </h1>
        <p className="text-white/80 text-sm">Por favor completa la información asociada a tu usuario.</p>
      </div>
      <form className="flex flex-col gap-4" autoComplete="off" noValidate>
        <div className="flex flex-col items-start">
          <label htmlFor="documento" className="font-semibold mb-1 text-white text-sm">Documento de Identidad</label>
          <input
            id="documento"
            name="documento"
            type="text"
            className={`input input-bordered input-sm w-full ${docError ? "input-error" : ""}`}
            placeholder="Ej: V123456789"
            value={data.documento}
            onChange={handleDocumentoChange}
            maxLength={10}
            autoComplete="off"
          />
          {docError && <span className="text-xs text-error mt-1">{docError}</span>}
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="cargo" className="font-semibold mb-1 text-white text-sm">Cargo en la empresa</label>
          <select
            id="cargo"
            name="cargo"
            className={`select select-bordered select-sm w-full ${cargoError ? "select-error" : ""}`}
            value={data.cargo}
            onChange={handleCargoChange}
          >
            <option value="" disabled>Selecciona tu cargo</option>
            <option value="OWNER">Dueño</option>
            <option value="IN CHARGE">Encargado</option>
            <option value="COMMUNITY MNGR">Community Manager</option>
            <option value="SALES">Vendedor</option>
          </select>
          {cargoError && <span className="text-xs text-error mt-1">{cargoError}</span>}
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className={`w-3 h-3 rounded-full ${isFormValid ? "bg-success" : "bg-base-300"}`}></div>
          <span className={`text-xs ml-2 ${isFormValid ? "text-success" : "text-base-content/60"}`}>
            {isFormValid ? "Formulario válido" : "Completa todos los campos"}
          </span>
        </div>
      </form>
    </div>
  );
}
