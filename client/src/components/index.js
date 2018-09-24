import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import TestPage from "./TestPage";
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
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/mail" component={MailPage} />
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/:unfoundLocation" component={NotFoundPage} />
          </Switch>{" "}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
