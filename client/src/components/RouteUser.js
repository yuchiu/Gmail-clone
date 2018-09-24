import React from "react";
import { withRouter } from "react-router-dom";

class RouteUser extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    history.push("/mail");
  }

  render() {
    return null;
  }
}

export default withRouter(RouteUser);
