import { combineReducers } from "redux";

import errorReducer from "./error.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import appGlobalStateReducer from "./appGlobalState.reducer";

const rootReducer = combineReducers({
  errorReducer,
  authReducer,
  userReducer,
  appGlobalStateReducer
});

export default rootReducer;
