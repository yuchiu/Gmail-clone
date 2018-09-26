import constants from "@/constants";
import { createSelector } from "reselect";
import moment from "moment";

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
const getStateMailList = state => state.mailReducer.mailList;

/* derived data selectors */
const getMailOverviewList = createSelector(getStateMailList, mailList =>
  mailList
    .sort((mail1, mail2) => mail2.timestamp - mail1.timestamp)
    .map(mail => {
      const newMail = { ...mail };
      const dash = " - ";
      newMail.overview = dash.concat(newMail.body);
      console.log(newMail.subject.length, newMail.overview.length);
      if (newMail.subject.length + newMail.overview.length > 150) {
        newMail.overview = newMail.overview
          .slice(0, 149 - newMail.subject.length)
          .concat("...");
      }
      newMail.timestamp = moment(newMail.timestamp).format("MMM Do");
      return newMail;
    })
);

export { getMailOverviewList };
