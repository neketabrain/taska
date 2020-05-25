export interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegistrationFormProps {
  onSubmit: (values: RegistrationFormValues) => Promise<void>;
}
