import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

import MailPage from "./MailPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import ErrorPage from "./ErrorPage";
import RouteUser from "./RouteUser";
import AuthenticatedRoute from "./AuthenticatedRoute";
import TokenAutoAuth from "./TokenAutoAuth";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    return hasError ? (
      <ErrorPage />
    ) : (
      <BrowserRouter>
        <React.Fragment>
          {/* try to log in user automatically if token exist in local storage */}
          <TokenAutoAuth />
          <Switch>
            <Route exact path="/" component={RouteUser} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <AuthenticatedRoute exact path="/mail" component={MailPage} />
            <Route exact path="/:unfoundLocation" component={NotFoundPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
