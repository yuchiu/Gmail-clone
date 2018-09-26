import constants from "@/constants";
import { localStore, sessionStore } from "@/utils";

const initialState = {
  mailList: []
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case constants.FETCH_MAIL_LIST:
      newState.mailList = action.payload.mailList;
      return newState;

    default:
      return state;
  }
};

/* state selectors */
const getMailList = state => state.mailReducer.mailList;

export { getMailList };
