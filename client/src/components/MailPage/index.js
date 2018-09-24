import React from "react";
import { connect } from "react-redux";
import { SideBar, NavBar } from "../common";

import "./index.scss";
import { appGlobalStateSelector } from "@/reducers/selectors";

class MailPage extends React.Component {
  render() {
    const { isSideBarOpen } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <SideBar>
          <main className="mailpage">
            <nav className="mail-category">Primary | Social | Promotions</nav>
            <section className={`mail-list side-bar-${isSideBarOpen}`}>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
              <li>- email</li>
            </section>
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
