import constants from "@/constants";
import { mailService } from "./services";

export default {
  fetchMailList: () => async dispatch => {
    try {
      const response = await mailService.fetchMailList();
      const { data } = response;
      dispatch({
        type: constants.FETCH_MAIL_LIST,
        payload: data
      });
    } catch (err) {
      const { data } = err.response;
      dispatch({
        type: constants.MAIL_ERROR,
        payload: data
      });
    }
  }
};
