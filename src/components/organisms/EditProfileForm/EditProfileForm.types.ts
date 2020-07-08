import { ClassName } from "src/types";

export type EditProfileFormValues = {
  firstName: string;
  lastName: string;
};

export type EditProfileFormProps = ClassName & {
  initialValues: EditProfileFormValues;
  onSubmit: (values: EditProfileFormValues) => Promise<void>;
};
