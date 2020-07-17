import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Build from "./components/build";
import Raise from "./components/raise";
import Summer from "./components/summer";
import Years from "./components/years";
import Services from "./components/services";
import WeWantYou from "./components/weWantYou";
import OurTeam from "./components/ourTeam";
import Contact from "./components/contact";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Build />
        <Raise />
        <Summer />
        <Years />
        <Services />
        <OurTeam />
        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
export default App;
