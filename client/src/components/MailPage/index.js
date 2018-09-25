import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MailList from "./MailList";
import MailOption from "./MailOption";
import MailCategory from "./MailCategory";
import { appGlobalStateSelector } from "@/reducers/selectors";

class MailPage extends React.Component {
  render() {
    const { isSideBarOpen } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <SideBar>
          <main className={`mailpage side-bar-${isSideBarOpen}`}>
            <MailOption />
            <MailCategory />
            <MailList />
          </main>
        </SideBar>
      </React.Fragment>
    );
  }
}

const stateToProps = state => ({
  isSideBarOpen: appGlobalStateSelector.getIsSideBarOpen(state)
});

export default connect(
  stateToProps,
  null
)(MailPage);
