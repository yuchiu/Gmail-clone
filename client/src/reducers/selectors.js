import { getError } from "./error.reducer";
import { getIsUserLoggedIn } from "./auth.reducer";
import { getCurrentUser, getUsername } from "./user.reducer";
import {
  getIsSideBarOpen,
  getSelectedSideBarItem
} from "./globalState.reducer";
import { getMailOverviewList } from "./mail.reducer";

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

const globalStateSelector = {
  getIsSideBarOpen: state => getIsSideBarOpen(state),
  getSelectedSideBarItem: state => getSelectedSideBarItem(state)
};

const mailSelector = {
  getMailOverviewList: state => getMailOverviewList(state)
};

export {
  globalStateSelector,
  mailSelector,
  errorSelector,
  authSelector,
  userSelector
};
