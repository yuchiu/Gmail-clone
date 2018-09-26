import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import MailList from "./MailList";
import MailOption from "./MailOption";
import MailCategory from "./MailCategory";
import { mailAction } from "@/actions";
import { globalStateSelector } from "@/reducers/selectors";

class MailPage extends React.Component {
  componentDidMount() {
    const { fetchMailList } = this.props;
    fetchMailList();
  }

  render() {
    const { isSideBarOpen } = this.props;
    return (
      <React.Fragment>
        <main className={`mail-container side-bar-${isSideBarOpen}`}>
          <MailOption />
          <MailCategory />
          <MailList />
        </main>
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  isSideBarOpen: globalStateSelector.getIsSideBarOpen(state)
});

const dispatchToProps = dispatch => ({
  fetchMailList: () => dispatch(mailAction.fetchMailList())
});

export default connect(
  stateToProps,
  dispatchToProps
)(MailPage);
