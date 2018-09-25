import React from "react";
import PropTypes from "prop-types";

import Content from "./Content";

class NotFoundPage extends React.Component {
  render() {
    const {
      match: {
        params: { unfoundLocation }
      }
    } = this.props;
    return (
      <React.Fragment>
        <main className="notfoundpage">
          <Content unfoundLocation={unfoundLocation} />
        </main>
      </React.Fragment>
    );
  }
}

NotFoundPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default NotFoundPage;
