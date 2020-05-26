import { UseErrors } from "src/hooks/useErrors";

export interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegistrationFormProps extends Partial<UseErrors> {
  onSubmit: (values: RegistrationFormValues) => Promise<void>;
}
