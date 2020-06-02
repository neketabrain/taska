import { UseErrors } from "src/hooks/useErrors";

export interface ChangeEmailFormValues {
  email: string;
  password: string;
}

export interface ChangeEmailFormProps extends Partial<UseErrors> {
  onSubmit: (
    values: ChangeEmailFormValues,
    resetValues: () => void
  ) => Promise<void>;
}
