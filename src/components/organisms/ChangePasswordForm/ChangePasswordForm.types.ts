import { GetError, SetErrors } from "src/hooks/useErrors/useErrors.types";
import { ClassName } from "src/types";

export type ChangePasswordFormValues = {
  newPassword: string;
  oldPassword: string;
};

export type ChangePasswordFormProps = ClassName & {
  getError: GetError;
  initialValues: ChangePasswordFormValues;
  onSubmit: (
    values: ChangePasswordFormValues,
    resetValues: VoidFunction
  ) => Promise<void>;
  setErrors: SetErrors;
};
