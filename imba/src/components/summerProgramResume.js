import React, { Component } from "react";
import "../App.css";
import "./summerProgramResume.css";

export default class SummerProgramResume extends Component {
  render() {
    return (
      <div className="programResume">
        <div className="row title1 lineHeight text-center">
          A 2 WEEK-LONG PROGRAMME TAILORED FOR JUNIOR PLAYERS DURING THE SUMMER
          HOLIDAYS
        </div>
        <br />
        <div className="row title1 lineHeight text-center">
          A <span className="orange text-center"> 2 WEEK-LONG PROGRAMME </span>
          TAILORED FOR JUNIOR PLAYERS DURING THE SUMMER HOLIDAYS
        </div>
        <div className="row text my-5">
          <div className="col">
            It is specially designed for young people to improve their
            basketball skills while enjoying an intense and fulfilling personal
            experience.
          </div>
          <div className="col">
            It is a comprehensive programme that includes the development of
            fundamental basketball skills as well as basic training in sports
            management.
          </div>
        </div>
      </div>
    );
  }
}
