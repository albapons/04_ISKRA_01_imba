import React, { Component } from "react";
import "./summerProgramme.css";
import "../App.css";

export default class summerProgramme extends Component {
  render() {
    return (
      <div className="programme">
        <div className="w-50 mx-3 text2">
          <div>
            <div className="programmeTitle">DURATION</div>
            <strong>2 weeks</strong>
          </div>

          <div className="my-4">
            <div className="programmeTitle">DURATION</div>2 summer camp editions
            will take place in summer 2020
            <ul>
              <li>From 1st to 12th July</li>
              <li>From 15th to 26th July</li>
            </ul>
          </div>

          <div className="my-4">
            <div className="programmeTitle">PLACE</div>
            <strong>Manresa </strong>(40 minutes from Barcelona).
          </div>
        </div>
        <div className="w-50 mx-3 text2">
          <div className="programmeTitle">PRICE</div>
          <div>
            <strong>2000 € </strong>per 2 weeks
          </div>
          <br />
          <div>The price includes:</div>
          <ul>
            <li>Physical workout (1 hour per day)</li>
            <li>Workout on court (3 hours per day)</li>
            <li>Training course on sports management (3 hours per day)</li>
            <li>
              Masterclasses (high performance coaches, basketball players and
              sports managers)
            </li>
            <li>Leisure activities </li>
            <li>Biodynamics test at the beginning of the camp</li>
            <li>Accommodation: shared accommodation in a hall of residence</li>
            <li>Tailored meals for the specific needs of each player</li>
          </ul>
        </div>
      </div>
    );
  }
}
