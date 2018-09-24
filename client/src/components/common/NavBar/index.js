import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { authAction } from "@/actions";

import "./index.scss";
import Logo from "@/components/common/Logo";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectToMail = this.redirectToMail.bind(this);
  }

  handleLogout = () => {
    const { logoutUser, history } = this.props;
    logoutUser();
    history.push("/login");
  };

  redirectToMail = () => {
    const { history } = this.props;
    history.push("/mail");
  };

  render() {
    const { history } = this.props;
    return (
      <Menu>
        <Menu.Item className="borderless" onClick={this.redirectToMail}>
          <Logo size="32" className="brand-logo" />
          <span className="brand-title">Gmail</span>
        </Menu.Item>
        <Menu.Item className="borderless " position="left">
          <div className="searchbox">
            <i className="search icon searchbox__icon" />{" "}
            <input className="searchbox__input" />
          </div>
        </Menu.Item>
        <Menu.Item position="right" className="borderless">
          <Dropdown item className="borderless" icon="user">
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
const dispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(authAction.logoutUser());
  }
});

export default withRouter(
  connect(
    null,
    dispatchToProps
  )(NavBar)
);
