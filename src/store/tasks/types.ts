export enum TasksTypes {
  ADD = "ADD_TASK",
  UPDATE = "UPDATE_TASK",
  GET = "GET_TASKS",
  CLEAN = "CLEAN_TASKS",
  DELETE = "DELETE_TASK",
}

export type Task = {
  name: string;
  date: string;
  time: string;
  completed: boolean;
  id?: string;
  description?: string;
  address?: string;
};

export type TasksState = Task[] | null;

type AddTask = {
  type: TasksTypes.ADD;
  payload: Task;
};

type UpdateTask = {
  type: TasksTypes.UPDATE;
  payload: Task;
};

type GetTasks = {
  type: TasksTypes.GET;
  payload: Task[];
};

type CleanTasks = {
  type: TasksTypes.CLEAN;
};

type DeleteTask = {
  type: TasksTypes.DELETE;
  payload: string;
};

export type TasksActions =
  | AddTask
  | UpdateTask
  | GetTasks
  | CleanTasks
  | DeleteTask;
