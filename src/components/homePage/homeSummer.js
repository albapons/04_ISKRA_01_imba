import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import "./homeSummer.css";

export default class HomeSummer extends Component {
  render() {
    return (
      <div className="homeSummer">
        <div className="mb-3">
          <div className="title1 text-center">SUMMER CAMP 2019</div>
          <div className="title2 text-center">A 2 WEEK-LONG PROGRAMME</div>
          <div className="title2 text-center">TAILORED FOR JUNIOR PLAYERS</div>
          <div className="title2 text-center">DURING THE SUMMER HOLIDAYS</div>
          <div className="d-flex justify-content-center">
            <button className="buttonO mt-3">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/summerCamp"
              >
                CAMP DETAILS
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
