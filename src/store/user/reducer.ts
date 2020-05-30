import { UserActions, UserState, UserTypes } from "./types";

function UserReducer(
  state: UserState = null,
  { type, payload }: UserActions
): Partial<UserState> {
  switch (type) {
    case UserTypes.SET: {
      return payload;
    }

    case UserTypes.UPDATE: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default UserReducer;
