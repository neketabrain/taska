import { Store, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ApplicationStore, RootReducer } from "./types";
import { UserReducer } from "./user";

const rootReducer = combineReducers<RootReducer>({
  user: UserReducer,
});

function configureStore(
  initialState?: ApplicationStore
): Store<ApplicationStore> {
  return createStore(rootReducer, initialState, composeWithDevTools());
}

export default configureStore;
