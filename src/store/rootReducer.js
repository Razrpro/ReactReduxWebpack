import { combineReducers } from "redux";

import user from "./user/reducers";

const appReducer = combineReducers({
  user
});

export default function rootReducer(state, action) {
  if(action.type === "CLEAR_REDUX_STATE") {
    state = undefined;
  }

  return appReducer(state, action);
};
