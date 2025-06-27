import { StepProps } from "@/interfaces/stepProps.interface";
import { useState } from "react";

const servicios = [
  { label: "WhatsApp", fields: ["Token", "Número"] },
  { label: "Instagram", fields: ["Usuario", "Contraseña"] },
  { label: "Telegram", fields: ["Bot Token"] },
  { label: "Notion", fields: ["API Key"] },
  { label: "Jira", fields: ["Usuario", "API Token"] },
  { label: "Chatbot Web", fields: ["API Key"] },
];

interface CredencialesForm {
  [servicio: string]: {
    [field: string]: string;
  };
}

export default function StepCredenciales(stepProps: Readonly<StepProps>) {
  const [form, setForm] = useState<CredencialesForm>({});

  const handleChange = (servicio: string, field: string, value: string) => {
    setForm((prev: CredencialesForm) => ({
      ...prev,
      [servicio]: {
        ...(prev[servicio] || {}),
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stepProps.onNext();
  };

  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">Configura las credenciales de tus servicios</h1>
      <form className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow flex flex-col gap-4" onSubmit={handleSubmit}>
        {servicios.map((serv) => (
          <div key={serv.label} className="mb-4">
            <h2 className="text-lg font-semibold text-white mb-2">{serv.label}</h2>
            {serv.fields.map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field}
                className="input input-bordered w-full mb-2"
                value={form[serv.label]?.[field] || ""}
                onChange={(e) => handleChange(serv.label, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary font-bold mt-2">Siguiente</button>
      </form>
    </div>
  );
}
