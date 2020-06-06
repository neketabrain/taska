import { Reducer } from "redux";

import { TasksState } from "./tasks";
import { UserState } from "./user";

export interface ApplicationStore {
  tasks: TasksState;
  user: UserState;
}

export type RootReducer = Reducer<ApplicationStore>;
