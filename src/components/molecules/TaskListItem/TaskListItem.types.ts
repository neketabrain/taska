import { Task } from "src/store/tasks";
import { ClassName } from "src/types";

export type TaskListItemProps = ClassName & {
  task: Task;
};
