import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import "../utils/navBar.css";
import "./joinUsWeWantYou.css";

export default class joinUsWeWantYou extends Component {
  render() {
    return (
      <div className="joinUsWeWantYou">
        <div className="row w-100 d-flex justify-content-between align-items-center">
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <div className="ml-5">
              <img
                height="120px"
                alt="Error"
                src="http://www.imb-academy.com/static/media/logo-imba-blanc.a4c6b748.svg"
              />
            </div>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/joinUs"
          >
            <div className="joinUs title3">JOIN US!</div>
          </Link>
        </div>

        <div className="weWant">
          <div className="title0">WE WANT YOU! </div>
          <div className="text-center lineHeight">
            IMBA IS ON THE LOOKOUT FOR TALENTED <br />
            AND APASSIONATE PLAYERS, BOTH MEN AND WOMEN, <br />
            TO LEAD AND BUILD THE FUTURE OF BASKETBALL.
          </div>
        </div>
      </div>
    );
  }
}
