export interface EditProfileFormValues {
  firstName: string;
  lastName: string;
}

export interface EditProfileFormProps {
  onSubmit: (values: EditProfileFormValues) => Promise<void>;
  initialState: EditProfileFormValues;
}
