import React from "react";
import { connect } from "react-redux";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import "./index.scss";
import { appGlobalStateSelector } from "@/reducers/selectors";

class SidebarExampleSidebar extends React.Component {
  render() {
    const { isSideBarOpen, children } = this.props;

    return (
      <React.Fragment>
        <Sidebar.Pushable className="Sidebar-pushable" as={Segment}>
          <Sidebar
            className="Sidebar"
            as={Menu}
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical
            visible={isSideBarOpen}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Inbox
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Important
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Sent Mail
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Drafts
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Spam
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher className="Sidebar-pusher">
            <Segment className="Sidebar-segment" basic>
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
)(SidebarExampleSidebar);
