import { GetError, SetErrors } from "src/hooks/useErrors/useErrors.types";
import { ClassName } from "src/types";

export type ResetPasswordFormValues = {
  email: string;
};

export type ResetPasswordFormProps = ClassName & {
  getError: GetError;
  initialValues: ResetPasswordFormValues;
  onSubmit: (values: ResetPasswordFormValues) => Promise<void>;
  setErrors: SetErrors;
};
