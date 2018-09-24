import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import "./index.scss";
import Logo from "@/components/common/Logo";

class NavBar extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Menu>
        <Menu.Item className="borderless" onClick={() => history.push("/")}>
          <Logo size="32" className="brand-logo" />
          <span className="brand-title">Gmail</span>
        </Menu.Item>
        <Menu.Item className="borderless " position="left ">
          <div className="searchbox">
            <i class="search icon searchbox__icon" />{" "}
            <input className="searchbox__input" />
          </div>
        </Menu.Item>
        <Menu.Item position="right" className="borderless">
          <Dropdown item className="borderless" icon="user">
            <Dropdown.Menu>
              <Dropdown.Item>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
