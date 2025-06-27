import { StepProps } from "@/interfaces/stepProps.interface";

export default function StepEmpresa(stepProps: Readonly<StepProps>) {
  return (
    <div className="text-center w-full flex flex-col items-center px-4 relative z-10">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl"></div>
      <h1 className="text-l sm:text-xl md:text-l font-bold break-words mb-2">
        Continuamos!!{" "}
        <span className="text-primary">
          {stepProps.userData?.full_name?.substring(
            0,
            stepProps.userData?.full_name?.indexOf(" ")
          ) ?? ""}
        </span>
      </h1>
      <p>Por favor completa la infromacion asociada a tu empresa.</p>
    </div>
  );
}
