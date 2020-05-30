import { User } from "firebase/app";

export enum UserTypes {
  UPDATE = "USER_UPDATE",
}

export type UserState = User | null;

type UpdateUser = {
  type: UserTypes.UPDATE;
  payload: UserState;
};

export type UserActions = UpdateUser;
