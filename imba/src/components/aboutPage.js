import React, { Component } from "react";
import "../App.css";
import Header from "./header";
import Contact from "./contact";
import Creating from "./creating";
import Agents from "./agents";
import Values from "./values";
import WeWantYou from "./weWantYou";
import Imba from "./imba";

export default class aboutPage extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"ABOUT IMBA"} />
        <Imba />
        <Creating />
        <Agents />
        <Values />
        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
