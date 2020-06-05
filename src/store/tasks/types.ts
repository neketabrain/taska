export enum TasksTypes {
  ADD = "ADD_TASK",
  UPDATE = "UPDATE_TASK",
  GET = "GET_TASKS",
}

export type Task = {
  id: string;
  name: string;
  date: string;
  time: string;
  description?: string;
  address?: string;
};

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

export type TasksActions = AddTask | UpdateTask | GetTasks;
