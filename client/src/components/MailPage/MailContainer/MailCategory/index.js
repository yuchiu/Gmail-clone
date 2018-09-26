import React from "react";
import { connect } from "react-redux";

class MailCategory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav> All | Social | Promotions</nav>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  null
)(MailCategory);
