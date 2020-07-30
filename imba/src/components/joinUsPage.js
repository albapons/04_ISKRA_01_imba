import React, { Component } from "react";
import WeWantYou from "./joinUsWeWantYou";
import Creating from "./creating";
import ImgFull from "./imgFull";
import WhatMakesDifference from "./whatMakesDifference";
import JoinUsProgrammes from "./joinUsProgrammes";
import JoinUsSlider from "./joinUsSlider";
import Contact from "./contact";
import "../App.css";
import "./joinUsPage.css";

export default class joinUsPage extends Component {
  render() {
    return (
      <div className="App">
        <WeWantYou />
        <Creating creatingImba={true} />
        <ImgFull
          src={
            "http://www.imb-academy.com/static/media/our-programs-1200x600px.f3c6ed35.jpg"
          }
        />
        <JoinUsProgrammes />
        <WhatMakesDifference />
        <JoinUsSlider />
        <Contact />
      </div>
    );
  }
}
