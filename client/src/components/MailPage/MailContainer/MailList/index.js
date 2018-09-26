import React from "react";
import { connect } from "react-redux";

import { mailSelector } from "@/reducers/selectors";

import "./index.scss";

class MailList extends React.Component {
  render() {
    const { mailList } = this.props;
    return (
      <section className="mail-list">
        {mailList.map((mail, i) => (
          <li key={`${mail.id}-${i}`}>{mail.subject}</li>
        ))}
      </section>
    );
  }
}

const stateToProps = state => ({
  mailList: mailSelector.getMailList(state)
});

export default connect(
  stateToProps,
  null
)(MailList);
