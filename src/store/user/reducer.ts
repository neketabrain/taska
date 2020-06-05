import { UserActions, UserState, UserTypes } from "./types";

function UserReducer(state: UserState = null, action: UserActions): UserState {
  switch (action.type) {
    case UserTypes.SET: {
      return action.payload;
    }

    case UserTypes.UPDATE: {
      return state ? { ...state, ...action.payload } : null;
    }

    default: {
      return state;
    }
  }
}

export default UserReducer;
