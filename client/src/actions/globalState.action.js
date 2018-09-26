import constants from "../constants";

export default {
  toggleSideBar: () => dispatch => {
    dispatch({
      type: constants.TOGGLE_SIDE_BAR
    });
  },
  switchSideBarItem: selectedItem => dispatch => {
    dispatch({
      type: constants.SWITCH_SIDE_BAR_ITEM,
      payload: selectedItem
    });
  }
};
