import { GetError, SetErrors } from "src/hooks/useErrors/useErrors.types";
import { ClassName } from "src/types";

export type RegistrationFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type RegistrationFormProps = ClassName & {
  getError: GetError;
  initialValues: RegistrationFormValues;
  onSubmit: (
    values: RegistrationFormValues,
    resetValues: VoidFunction
  ) => Promise<void>;
  setErrors: SetErrors;
};
