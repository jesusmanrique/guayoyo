"use client";
import { StepProps } from "@/interfaces/stepProps.interface";
import { useState } from "react";

export default function StepUsuario(stepProps: Readonly<StepProps>) {
  const [cargo, setCargo] = useState("");
  const [documento, setDocumento] = useState("");
  const [docError, setDocError] = useState("");
  const [cargoError, setCargoError] = useState("");
  const [supabaseError, setSupabaseError] = useState("");

  function validateDocumento(value: string) {
    const regex = /^[vepVEP]\d{2,9}$/;
    return regex.test(value);
  }

  function handleDocumentoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toUpperCase();
    setDocumento(value);
    if (value === "" || validateDocumento(value)) {
      setDocError("");
    } else {
      setDocError(
        "Debe iniciar por V, E o P seguido de 2 a 9 números. Ej: V123"
      );
    }
  }

  function validateForm(documento: string, cargo: string): boolean {
    let valid = true;
    const documentoMayus = documento.toUpperCase();

    if (!validateDocumento(documentoMayus)) {
      setDocError(
        "Debe iniciar por V, E o P seguido de 2 a 9 números. Ej: V123"
      );
      valid = false;
    } else {
      setDocError("");
    }

    if (!cargo) {
      setCargoError("Debes seleccionar un cargo.");
      valid = false;
    } else {
      setCargoError("");
    }

    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const documentoMayus = documento.toUpperCase();

    const isValid = validateForm(documento, cargo);

    if (!isValid) return;

    setSupabaseError("");

    const userData = {
      full_name: stepProps.clerkFullName ?? "",
      document: documentoMayus,
      position: cargo,
      email: stepProps.clerkEmail ?? "",
    };

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.error == "23505") {
          setSupabaseError("Cédula ya existe en nuestros registros.");
        } else {
          setSupabaseError(
            "Ocurrió un error al guardar los datos. Intenta nuevamente."
          );
        }
        return;
      }

      stepProps.onNext();
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      setSupabaseError(
        "Ocurrió un error al guardar los datos. Intenta nuevamente."
      );
    }
  }

  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl"></div>
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">
        Bienvenido!!{" "}
        <span className="text-primary">
          {stepProps.userData?.full_name ?? ""}
        </span>
      </h1>
      <p>Por favor completa la infromacion asociada a tu usuario.</p>
      <form
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow flex flex-col gap-6 mx-auto"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start">
          <label htmlFor="documento" className="font-semibold mb-1">
            Documento de Identidad
          </label>
          <input
            id="documento"
            name="documento"
            type="text"
            className={`input input-bordered w-full ${
              docError ? "input-error" : ""
            }`}
            placeholder="Ej: V123456789"
            value={documento}
            onChange={handleDocumentoChange}
            maxLength={10}
            autoComplete="off"
          />
          {docError && (
            <span className="text-xs text-error mt-1">{docError}</span>
          )}
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="cargo" className="font-semibold mb-1">
            Cargo en la empresa
          </label>
          <select
            id="cargo"
            name="cargo"
            className="select select-bordered w-full"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
            <option value="" disabled>
              Selecciona tu cargo
            </option>
            <option value="OWNER">Dueño</option>
            <option value="IN CHARGE">Encargado</option>
            <option value="COMMUNITY MNGR">Community Manager</option>
            <option value="SALES">Vendedor</option>
          </select>
          {cargoError && (
            <span className="text-xs text-error mt-1">{cargoError}</span>
          )}
        </div>
        {supabaseError && (
          <div className="text-error text-sm font-semibold text-center mb-2">
            {supabaseError}
          </div>
        )}
        <div className="flex gap-2 mt-4">
          {!stepProps.isFirst && (
            <button
              type="button"
              className="btn btn-outline flex-1"
              onClick={stepProps.onBack}
            >
              Atrás
            </button>
          )}
          <button
            type="submit"
            className="btn btn-primary flex-1 font-bold"
            disabled={!!docError || !!cargoError || !documento || !cargo}
          >
            {stepProps.isLast ? "Finalizar" : "Guardar y continuar"}
          </button>
        </div>
      </form>
    </div>
  );
}
