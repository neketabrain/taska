import { UserActions, UserState, UserTypes } from "./types";

function UserReducer(state: UserState = null, action: UserActions): UserState {
  switch (action.type) {
    case UserTypes.UPDATE: {
      return state ? { ...state, ...action.payload } : null;
    }

    case UserTypes.SET: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default UserReducer;
