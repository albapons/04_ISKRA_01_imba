import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Two from "./components/two";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Two />

        {/*<div>more about</div>
        <div>summercamp</div>
        <div>years</div>
        <div>services</div>
        <div>our team</div>
        <div>we want you</div>
        <div>contact + footer</div> */}
      </div>
    );
  }
}
export default App;
