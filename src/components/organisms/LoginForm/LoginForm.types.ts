import { UseErrors } from "src/hooks/useErrors";

export interface LoginFormValues {
  email: string;
  password: string;
  isRemembered: boolean;
}

export interface LoginFormProps extends Partial<UseErrors> {
  onSubmit: (values: LoginFormValues) => Promise<void>;
  error?: string;
}
