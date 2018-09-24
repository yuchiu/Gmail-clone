import { combineReducers } from "redux";

import testReducer from "./test.reducer";
import errorReducer from "./error.reducer";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  testReducer,
  errorReducer,
  authReducer,
  userReducer
});

export default rootReducer;
