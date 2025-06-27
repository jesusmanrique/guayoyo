import { ClientData } from "./clientData.interface";
import { UserData } from "./userData.interface";

// Tipos para cada parte del estado global del onboarding
export interface UsuarioStepData {
  documento: string;
  cargo: string;
}

export interface EmpresaStepData {
  nombre: string;
  rif: string;
  sector: string;
  tamano: string;
  direccion: string;
}

export type InstanciasStepData = string[];

export type CredencialesStepData = {
  [servicio: string]: {
    [field: string]: string;
  };
};

export interface PagoStepData {
  nombre: string;
  tarjeta: string;
  vencimiento: string;
  cvc: string;
}

// Props genéricos para steps
export interface StepBaseProps<T> {
  data: T;
  setData: (data: T) => void;
  onValidationChange?: (isValid: boolean) => void;
}

// Props específicos para cada step
export interface StepUsuarioProps extends StepBaseProps<UsuarioStepData> {
  clerkEmail: string;
  clerkFullName: string;
}

export interface StepEmpresaProps extends StepBaseProps<EmpresaStepData> {}

export interface StepInstanciasProps extends StepBaseProps<InstanciasStepData> {}

export interface StepCredencialesProps extends StepBaseProps<CredencialesStepData> {
  instancias: { label: string; value: string }[];
}

export interface StepPagoProps extends StepBaseProps<PagoStepData> {}

export interface StepPlanesProps extends StepBaseProps<string> {}

export interface StepProps {
  readonly onNext: () => void;
  readonly onBack: () => void;
  readonly isLast: boolean;
  readonly isFirst: boolean;
  readonly clerkEmail: string;
  readonly clerkFullName: string;
  readonly userData?: UserData;
  readonly clientData?: ClientData;
  readonly onValidationChange?: (isValid: boolean) => void;
}
