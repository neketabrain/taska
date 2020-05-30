import { Store, combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { ApplicationStore, RootReducer } from "./types";
import { UserReducer } from "./user";

const rootReducer = combineReducers<RootReducer>({
  user: UserReducer,
});

function configureStore(initialState?: ApplicationStore): Store {
  const enhancers = applyMiddleware(thunk);
  const composedEnhancers = composeWithDevTools(enhancers);

  return createStore(rootReducer, initialState, composedEnhancers);
}

export default configureStore;
