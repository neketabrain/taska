import { User } from "firebase/app";

export enum UserTypes {
  UPDATE = "USER_UPDATE",
  SET = "USER_SET",
}

export type UserState = User | null;

type SetUser = {
  type: UserTypes.UPDATE;
  payload: UserState;
};

type UpdateUser = {
  type: UserTypes.SET;
  payload: Partial<UserState>;
};

export type UserActions = SetUser | UpdateUser;
