import { UseErrors } from "src/hooks/useErrors";

export interface ChangePasswordFormValues {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordFormProps extends Partial<UseErrors> {
  onSubmit: (
    values: ChangePasswordFormValues,
    resetValues: () => void
  ) => Promise<void>;
}
