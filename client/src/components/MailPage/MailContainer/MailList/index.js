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
          <li key={`${mail.id}-${i}`} className="mail-row">
            {mail.isImportant ? (
              <i className="mail-row__important mail-row__important--true fa fa-star" />
            ) : (
              <i className="mail-row__important far fa-star" />
            )}
            <p className="mail-row__sender">{mail.sender}</p>
            <div className="mail-row__body">
              <span className="mail-row__body__subject">{mail.subject}</span>
              <span className="mail-row__body__overview">{mail.overview}</span>
            </div>
            <span className="mail-row__timestamp">{mail.timestamp}</span>
          </li>
        ))}
      </section>
    );
  }
}

const stateToProps = state => ({
  mailList: mailSelector.getMailOverviewList(state)
});

export default connect(
  stateToProps,
  null
)(MailList);
