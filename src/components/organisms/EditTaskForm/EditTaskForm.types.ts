export interface EditTaskFormValues {
  name: string;
  date: string;
  time: string;
  description?: string;
  address?: string;
}

export interface EditTaskFormProps {
  initialState: EditTaskFormValues;
  onSubmit: (values: EditTaskFormValues) => Promise<void>;
}
