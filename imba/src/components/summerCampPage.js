import React, { Component } from "react";
import "../App.css";
import "./summerCampPage.css";
import ProgramResume from "./summerProgramResume";
import Application from "./summerApplication";
import Programme from "./summerProgramme";
import OurTeam from "./summerOurTeam";
import WhatMakesDifference from "./whatMakesDifference";
import Creating from "./creating";
import Agents from "./agents";

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
