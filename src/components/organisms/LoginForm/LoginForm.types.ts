export interface LoginFormValues {
  email: string;
  password: string;
  isRemembered: boolean;
}

export interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => Promise<void>;
}
