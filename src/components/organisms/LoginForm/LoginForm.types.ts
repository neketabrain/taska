import { GetError, SetErrors } from "src/hooks/useErrors/useErrors.types";
import { ClassName } from "src/types";

export type LoginFormValues = {
  email: string;
  isRemembered: boolean;
  password: string;
};

export type LoginFormProps = ClassName & {
  getError: GetError;
  initialValues: LoginFormValues;
  onSubmit: (
    values: LoginFormValues,
    resetValues: VoidFunction
  ) => Promise<void>;
  setErrors: SetErrors;
};
