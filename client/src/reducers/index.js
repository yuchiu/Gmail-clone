import { combineReducers } from "redux";

import testReducer from "./test.reducer";
import errorReducer from "./error.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import appGlobalStateReducer from "./appGlobalState.reducer";

const rootReducer = combineReducers({
  testReducer,
  errorReducer,
  authReducer,
  userReducer,
  appGlobalStateReducer
});

export default rootReducer;
