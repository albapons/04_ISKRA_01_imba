import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class four extends Component {
  render() {
    return (
      <div className="four">
        <div className="mb-3">
          <div className="title1 text-center">SUMMER CAMP 2019</div>
          <div className="title2 text-center">A 2 WEEK-LONG PROGRAMME</div>
          <div className="title2 text-center">TAILORED FOR JUNIOR PLAYERS</div>
          <div className="title2 text-center">DURING THE SUMMER HOLIDAYS</div>
          <div className="d-flex justify-content-center">
            <button className="buttonO mt-3">CAMP DETAILS </button>
          </div>
        </div>
      </div>
    );
  }
}
