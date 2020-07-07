import { Task } from "src/store/tasks";
import { ClassName } from "src/types";

export type EditTaskFormProps = ClassName & {
  initialValues: Task;
  onSubmit: (values: Task) => Promise<void>;

  isEditing?: boolean;
};
