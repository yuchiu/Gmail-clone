import constants from "../constants";

const initialState = {
  isSideBarOpen: true
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case constants.TOGGLE_SIDE_BAR:
      newState.isSideBarOpen = !newState.isSideBarOpen;
      return newState;

    default:
      return state;
  }
};

/* state selectors */
const getIsSideBarOpen = state => state.appGlobalStateReducer.isSideBarOpen;

export { getIsSideBarOpen };
