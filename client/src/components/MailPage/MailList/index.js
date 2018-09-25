import React from "react";
import { connect } from "react-redux";

import "./index.scss";

class MailList extends React.Component {
  render() {
    return (
      <section className="mail-list">
        <li>- email 1</li>
        <li>- email</li>
        <li>- email</li>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(MailList);
