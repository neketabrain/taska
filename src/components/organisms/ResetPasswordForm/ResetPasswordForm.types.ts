export interface ResetPasswordFormValues {
  email: string;
}

export interface ResetPasswordFormProps {
  onSubmit: (values: ResetPasswordFormValues) => Promise<void>;
}
