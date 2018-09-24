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
            <Menu.Item as="a" className="borderless">
              <div className="sidebar-item">
                <i className="fas sidebar-item__icon fa-inbox" />
                <span className="sidebar-item__title">Inbox</span>
              </div>
            </Menu.Item>
            <Menu.Item as="a" className="borderless">
              <div className="sidebar-item">
                <i className="fas sidebar-item__icon fa-star" />
                <span className="sidebar-item__title">Important</span>
              </div>
            </Menu.Item>
            <Menu.Item as="a" className="borderless">
              <div className="sidebar-item">
                <i className="fas sidebar-item__icon fa-paper-plane" />
                <span className="sidebar-item__title">Sent Mail</span>
              </div>
            </Menu.Item>
            <Menu.Item as="a" className="borderless">
              <div className="sidebar-item">
                <i className="fas sidebar-item__icon fa-file" />
                <span className="sidebar-item__title">Drafts</span>
              </div>
            </Menu.Item>
            <Menu.Item as="a" className="borderless">
              <div className="sidebar-item">
                <i className="fas sidebar-item__icon fa-exclamation-circle" />
                <span className="sidebar-item__title">Spam</span>
              </div>
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
