import React, { Component } from "react";
import Build from "./homeBuild";
import Raise from "./homeRaise";
import Summer from "./homeSummer";
import Years from "./homeYears";
import Services from "./homeServices";
import OurTeam from "./homeOurTeam";
import WeWantYou from "../utils/weWantYou";
import Contact from "../utils/contact";
import "../../App.css";

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
