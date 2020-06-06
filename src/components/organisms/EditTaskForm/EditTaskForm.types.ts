import { Task } from "src/store/tasks";

export interface EditTaskFormProps {
  initialState: Task;
  onSubmit: (values: Task) => Promise<void>;
}
