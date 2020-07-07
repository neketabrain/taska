import { TasksState } from "src/store/tasks";
import { ClassName } from "src/types";

export type TaskListProps = ClassName & {
  tasks: TasksState;
};
