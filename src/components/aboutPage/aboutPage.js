import React, { Component } from "react";
import "../../App.css";
import Header from "../utils/header";
import Creating from "../utils/creating";
import Agents from "../utils/agents";
import Values from "./aboutValues";
import Imba from "./aboutImba";
import WeWantYou from "../utils/weWantYou";
import Contact from "../utils/contact";

export default class aboutPage extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"ABOUT IMBA"} />
        <Imba />
        <Creating creating={true} />
        <Agents />
        <Values />
        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
