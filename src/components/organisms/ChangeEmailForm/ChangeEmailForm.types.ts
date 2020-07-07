import { GetError, SetErrors } from "src/hooks/useErrors/useErrors.types";
import { ClassName } from "src/types";

export type ChangeEmailFormValues = {
  email: string;
  password: string;
};

export type ChangeEmailFormProps = ClassName & {
  getError: GetError;
  initialValues: ChangeEmailFormValues;
  onSubmit: (
    values: ChangeEmailFormValues,
    resetValues: VoidFunction
  ) => Promise<void>;
  setErrors: SetErrors;
};
