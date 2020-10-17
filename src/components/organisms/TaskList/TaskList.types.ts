import { Task } from "src/store/tasks";
import { ClassName } from "src/types";

export type Tasks = Array<[string, Task[]]>;

export type TaskListProps = ClassName & {
  tasks: Tasks;
};
