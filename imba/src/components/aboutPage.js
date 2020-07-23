import React, { Component } from "react";
import "../App.css";
import Header from "./header";
import Creating from "./creating";
import Agents from "./agents";
import Values from "./aboutValues";
import Imba from "./aboutImba";
import WeWantYou from "./weWantYou";
import Contact from "./contact";

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
