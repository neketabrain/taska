import { User } from "firebase/app";

export enum UserTypes {
  UPDATE = "UPDATE_USER",
  SET = "SET_USER",
}

export type UserState = User | null;

type SetUser = {
  type: UserTypes.SET;
  payload: UserState;
};

type UpdateUser = {
  type: UserTypes.UPDATE;
  payload: Partial<UserState>;
};

export type UserActions = SetUser | UpdateUser;
