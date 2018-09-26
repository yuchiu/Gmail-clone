import React from "react";
import { connect } from "react-redux";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import "./index.scss";
import SideBarItem from "./SideBarItem";
import ComposeMailModal from "./ComposeMailModal";
import { globalStateAction } from "@/actions";
import { globalStateSelector } from "@/reducers/selectors";
import composeLogoSrc from "@/assets/images/logos/compose-logo.png";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComposeMailModalOpen: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleComposeMailModal = this.toggleComposeMailModal.bind(this);
  }

  toggleComposeMailModal = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      isComposeMailModalOpen: !this.state.isComposeMailModalOpen
    });
  };

  handleSelect = selectedName => {
    const { switchSideBarItem } = this.props;
    switchSideBarItem(selectedName);
  };

  render() {
    const { isComposeMailModalOpen } = this.state;
    const { isSideBarOpen, children, selectedSideBarItem } = this.props;
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
            <ComposeMailModal
              onClose={this.toggleComposeMailModal}
              isOpen={isComposeMailModalOpen}
              key="compose-mail-modal"
            />
            <Menu.Item as="a" className="borderless">
              <div className={`sidebar-compose`}>
                <button
                  className="compose-button"
                  onClick={this.toggleComposeMailModal}
                >
                  <img
                    alt="compose-button"
                    className="compose-button__logo"
                    src={composeLogoSrc}
                  />
                  <span className="compose-button__title">Compose</span>
                </button>
              </div>
            </Menu.Item>
            <SideBarItem
              label="inbox"
              itemName="inbox"
              handleSelect={this.handleSelect.bind(this, "inbox")}
              selectedSideBarItem={selectedSideBarItem}
              faIcon="fas fa-inbox"
            />

            <SideBarItem
              label="important"
              itemName="important"
              handleSelect={this.handleSelect.bind(this, "important")}
              selectedSideBarItem={selectedSideBarItem}
              faIcon="fas fa-star"
            />

            <SideBarItem
              label="Sent Mail"
              itemName="sent-mail"
              handleSelect={this.handleSelect.bind(this, "sent-mail")}
              selectedSideBarItem={selectedSideBarItem}
              faIcon="fas fa-paper-plane"
            />
            <SideBarItem
              label="Drafts"
              itemName="drafts"
              handleSelect={this.handleSelect.bind(this, "drafts")}
              selectedSideBarItem={selectedSideBarItem}
              faIcon="fas fa-file"
            />
            <SideBarItem
              label="Spam"
              itemName="spam"
              handleSelect={this.handleSelect.bind(this, "spam")}
              selectedSideBarItem={selectedSideBarItem}
              faIcon="fas fa-exclamation-circle"
            />
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
  isSideBarOpen: globalStateSelector.getIsSideBarOpen(state),
  selectedSideBarItem: globalStateSelector.getSelectedSideBarItem(state)
});

const dispatchToProps = dispatch => ({
  switchSideBarItem: selectedItem =>
    dispatch(globalStateAction.switchSideBarItem(selectedItem))
});

export default connect(
  stateToProps,
  dispatchToProps
)(SideBar);
