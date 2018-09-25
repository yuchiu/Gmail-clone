import React from "react";
import { connect } from "react-redux";

class MailOption extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav> select | refresh | previous | next | setting</nav>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(MailOption);
