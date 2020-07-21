import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Header from "./header";
import WeWantYou from "./weWantYou";
import Contact from "./contact";

export default class programmesPage extends Component {
  render() {
    return (
      <div>
        <Header title={"PROGRAMMES"} />
        {/* FROM 18 YEARS */}
        {/* SPORTS HIGH PERFORMANCE  TRAINING fer component x TÍTOL i x cada bloc */}
        {/* IMG */}
        {/* COMBINE YOUR SPORTS CAREER WITH YOUR HIGHER EDUCATION aprofitar títol i blocs */}
        {/* IMG */}
        {/* ACCOMMODATION IN RESIDENCE aprofitar títol i blocs */}
        {/* IMG */}
        {/* FROM */}
        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
