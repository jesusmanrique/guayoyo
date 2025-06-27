import { ClientData } from "./clientData.interface";
import { UserData } from "./userData.interface";

export interface StepProps {
  readonly onNext: () => void;
  readonly onBack: () => void;
  readonly isLast: boolean;
  readonly isFirst: boolean;
  readonly clerkEmail: string;
  readonly clerkFullName: string;
  readonly userData?: UserData;
  readonly clientData?: ClientData;
}
