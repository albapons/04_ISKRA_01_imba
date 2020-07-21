import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "./summerCampPage.css";
import ProgramResume from "./programResume";
import Application from "./application";
import Creating from "./creating";
import Agents from "./agents";

export default class summerCampPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="summerHeader">SUMMER CAMP 2019</div>
        <ProgramResume />
        <Application />
        {/* Program */}
        {/* Team */}
        {/* WhatMakesDifference */}
        <Creating />
        <Agents />
      </div>
    );
  }
}
