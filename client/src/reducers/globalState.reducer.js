import constants from "../constants";

const initialState = {
  isSideBarOpen: true,
  selectedSideBarItem: "inbox"
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case constants.TOGGLE_SIDE_BAR:
      newState.isSideBarOpen = !newState.isSideBarOpen;
      return newState;

    case constants.SWITCH_SIDE_BAR_ITEM:
      newState.selectedSideBarItem = action.payload;
      return newState;

    default:
      return state;
  }
};

/* state selectors */
const getIsSideBarOpen = state => state.globalStateReducer.isSideBarOpen;
const getSelectedSideBarItem = state =>
  state.globalStateReducer.selectedSideBarItem;

export { getIsSideBarOpen, getSelectedSideBarItem };
