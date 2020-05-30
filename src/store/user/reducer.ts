import { UserActions, UserState, UserTypes } from "./types";

function UserReducer(
  state: UserState = null,
  { type, payload }: UserActions
): UserState {
  switch (type) {
    case UserTypes.UPDATE: {
      return payload;
    }

    default: {
      return state;
    }
  }
}

export default UserReducer;
