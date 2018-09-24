import { getError } from "./error.reducer";
import { getText } from "./test.reducer";
import { getIsUserLoggedIn } from "./auth.reducer";
import { getCurrentUser, getUsername } from "./user.reducer";
import { getIsSideBarOpen } from "./appGlobalState.reducer";

const testSelector = {
  getText: state => getText(state)
};

const userSelector = {
  getCurrentUser: state => getCurrentUser(state),
  getUsername: state => getUsername(state)
};
const authSelector = {
  getIsUserLoggedIn: state => getIsUserLoggedIn(state)
};

const errorSelector = {
  getError: state => getError(state)
};

const appGlobalStateSelector = {
  getIsSideBarOpen: state => getIsSideBarOpen(state)
};

export {
  testSelector,
  appGlobalStateSelector,
  errorSelector,
  authSelector,
  userSelector
};
