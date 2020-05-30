import { Reducer } from "redux";

import { UserState } from "./user";

export interface ApplicationStore {
  user: UserState;
}

export type RootReducer = Reducer<ApplicationStore>;
