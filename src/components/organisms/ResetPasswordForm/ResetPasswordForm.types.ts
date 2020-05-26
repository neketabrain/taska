import { UseErrors } from "src/hooks/useErrors";

export interface ResetPasswordFormValues {
  email: string;
}

export interface ResetPasswordFormProps extends Partial<UseErrors> {
  onSubmit: (values: ResetPasswordFormValues) => Promise<void>;
}
