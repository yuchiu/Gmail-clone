import React from "react";
import { SideBar, NavBar } from "../common";

class TestPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="mailpage">
          <SideBar />
          gmail page
        </main>
      </React.Fragment>
    );
  }
}

export default TestPage;
