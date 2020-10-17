export enum TasksTypes {
  ADD = "ADD_TASK",
  CLEAN = "CLEAN_TASKS",
  DELETE = "DELETE_TASK",
  SET = "SET_TASKS",
  UPDATE = "UPDATE_TASK",
}

export type Task = {
  completed: boolean;
  date: string;
  name: string;
  time: string;

  address?: string;
  description?: string;
  id?: string;
};

export type TasksState = Task[] | null;

type AddTask = {
  type: TasksTypes.ADD;
  payload: Task;
};

type CleanTasks = {
  type: TasksTypes.CLEAN;
};

type DeleteTask = {
  type: TasksTypes.DELETE;
  payload: string;
};

type GetTasks = {
  type: TasksTypes.SET;
  payload: Task[];
};

type UpdateTask = {
  type: TasksTypes.UPDATE;
  payload: Task;
};

export type TasksActions =
  | AddTask
  | CleanTasks
  | DeleteTask
  | GetTasks
  | UpdateTask;
