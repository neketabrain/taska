import { Task } from "src/store/tasks";
import { ClassName } from "src/types";

export type TaskInfoProps = ClassName & {
  task: Task;
};
