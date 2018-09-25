import React from "react";
import { Menu } from "semantic-ui-react";

class SideBarItem extends React.Component {
  render() {
    const { label, itemName, handleSelect, selectedItem, faIcon } = this.props;
    const selectedClassName =
      itemName === selectedItem
        ? "sidebar-item--selected sidebar-end--selected"
        : "";
    return (
      <React.Fragment>
        <Menu.Item as="a" className="borderless" onClick={handleSelect}>
          <div className={`sidebar-item ${selectedClassName}`}>
            <div className={`sidebar-item__start ${selectedClassName}`}>
              <i className={`fas sidebar-item__start__icon ${faIcon}`} />
              <span className="sidebar-item__start__title">{label}</span>
            </div>
            <div className={`sidebar-item__end`}>{"  "}</div>
          </div>
        </Menu.Item>
      </React.Fragment>
    );
  }
}

export default SideBarItem;
