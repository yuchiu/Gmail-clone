import React from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import ErrorModal from "./ErrorModal";
import MailContainer from "./MailContainer";

class MailPage extends React.Component {
  state = {
    openErrorModal: false
  };

  toggleErrorModal = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      openErrorModal: !this.state.openErrorModal
    });
  };

  render() {
    const { openErrorModal } = this.state;
    const { error, clearError } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <SideBar>
          <MailContainer />
        </SideBar>
        <ErrorModal
          onClose={this.toggleErrorModal}
          isOpen={openErrorModal}
          error={error}
          clearError={clearError}
          key="error-modal"
        />
      </React.Fragment>
    );
  }
}

export default MailPage;
