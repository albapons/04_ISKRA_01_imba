import React, { Component } from "react";
import ProgramResume from "./summerProgramResume";
import Application from "./summerApplication";
import Programme from "./summerProgramme";
import OurTeam from "./summerOurTeam";
import WhatMakesDifference from "../utils/whatMakesDifference";
import Creating from "../utils/creating";
import Agents from "../utils/agents";
import "../../App.css";
import "./summerCampPage.css";

export default class summerCampPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="summerHeader">SUMMER CAMP 2019</div>
        <ProgramResume />
        <Application />
        <Programme />
        <OurTeam />
        <WhatMakesDifference />
        <Creating creatingImba={true} />
        <Agents />
      </div>
    );
  }
}
