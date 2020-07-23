import React, { Component } from "react";
import "../App.css";
import Build from "./homeBuild";
import Raise from "./homeRaise";
import Summer from "./homeSummer";
import Years from "./homeYears";
import Services from "./homeServices";
import OurTeam from "./homeOurTeam";
import WeWantYou from "./weWantYou";
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
