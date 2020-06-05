import { Reducer } from "redux";

import { Task } from "./tasks";
import { UserState } from "./user";

export interface ApplicationStore {
  tasks: Task[];
  user: UserState;
}

export type RootReducer = Reducer<ApplicationStore>;
