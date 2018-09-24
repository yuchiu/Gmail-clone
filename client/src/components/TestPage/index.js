import React from "react";
import TextChanger from "./TextChanger";
import { Logo, NavBar } from "../common";

class TestPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main class="testpage">
          <Logo size="256" />
          <TextChanger />
        </main>
      </React.Fragment>
    );
  }
}

export default TestPage;
