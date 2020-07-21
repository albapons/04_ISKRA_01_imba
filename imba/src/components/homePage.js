import React, { Component } from "react";
import "../App.css";
import Build from "./build";
import Raise from "./raise";
import Summer from "./summer";
import Years from "./years";
import Services from "./services";
import WeWantYou from "./weWantYou";
import OurTeam from "./ourTeam";
import Contact from "./contact";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      programmes: false,
    };
  }

  render() {
    return (
      <div className="App">
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
export default HomePage;
