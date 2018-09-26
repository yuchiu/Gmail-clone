import constants from "@/constants";

const initialState = {
  error: ""
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case constants.MAIL_ERROR:
      newState.error = action.payload.error;
      return newState;

    case constants.AUTH_ERROR:
      newState.error = action.payload.error;
      return newState;

    case constants.CLEAR_ERROR:
      newState.error = "";
      return newState;

    default:
      return state;
  }
};

/* state selectors */
const getError = state => state.errorReducer.error;

export { getError };
