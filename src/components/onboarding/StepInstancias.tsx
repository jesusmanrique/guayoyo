import { StepProps } from "@/interfaces/stepProps.interface";
import { useState } from "react";

const opciones = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Instagram", value: "instagram" },
  { label: "Telegram", value: "telegram" },
  { label: "Notion", value: "notion" },
  { label: "Jira", value: "jira" },
  { label: "Chatbot Web", value: "chatbot" },
];

export default function StepInstancias(stepProps: Readonly<StepProps>) {
  const [seleccion, setSeleccion] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeleccion((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stepProps.onNext();
  };

  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">Selecciona las instancias/módulos que deseas usar</h1>
      <form className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
        {opciones.map((op) => (
          <label key={op.value} className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              value={op.value}
              checked={seleccion.includes(op.value)}
              onChange={handleChange}
              className="checkbox checkbox-primary"
            />
            {op.label}
          </label>
        ))}
        <button type="submit" className="btn btn-primary font-bold mt-2">Siguiente</button>
      </form>
    </div>
  );
}
