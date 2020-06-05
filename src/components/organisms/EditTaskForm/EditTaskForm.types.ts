import { UseErrors } from "src/hooks/useErrors";

export interface EditTaskFormValues {
  name: string;
  date: string;
  time: string;
  description?: string;
  address?: string;
}

export interface EditTaskFormProps extends Partial<UseErrors> {
  initialState: EditTaskFormValues;
  onSubmit: (values: EditTaskFormValues) => Promise<void>;
}
