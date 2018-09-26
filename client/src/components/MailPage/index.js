import React from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MailContainer from "./MailContainer";

class MailPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SideBar>
          <MailContainer />
        </SideBar>
      </React.Fragment>
    );
  }
}

export default MailPage;
