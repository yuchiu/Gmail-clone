import { combineReducers } from "redux";

import errorReducer from "./error.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import mailReducer from "./mail.reducer";
import globalStateReducer from "./globalState.reducer";

const rootReducer = combineReducers({
  errorReducer,
  authReducer,
  userReducer,
  mailReducer,
  globalStateReducer
});

export default rootReducer;
