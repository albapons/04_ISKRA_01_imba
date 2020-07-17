import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Two from "./components/two";
import Three from "./components/three";
import Four from "./components/four";
import Five from "./components/five";
import Six from "./components/six";
import WeWantYou from "./components/weWantYou";
import OurTeam from "./components/ourTeam";

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
        <Three />
        <Four />
        <Five />
        <Six />
        <OurTeam />
        <WeWantYou />
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
