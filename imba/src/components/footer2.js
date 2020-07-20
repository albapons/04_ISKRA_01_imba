import React, { Component } from "react";
import "../App.css";
import "./footer2.css";

export default class footer2 extends Component {
  render() {
    return (
      <div className="footer2">
        <div className="col d-flex justify-content-center">
          <div className="title5 text-white mx-3">LEGAL NOTE</div>
          <div className="title5 text-white">DATA PROTECTION</div>
        </div>
        <div className="col d-flex justify-content-center">
          <i className="fab fa-twitter fa-2x mx-2" />
          <i className="fab fa-facebook fa-2x mx-2" />
          <i className="fab fa-instagram fa-2x mx-2" />
          <i className="fab fa-youtube fa-2x mx-2" />
        </div>
        <div className="col d-flex justify-content-center">
          <i className="fas fa-arrow-up fa-2x mx-2" />
        </div>
      </div>
    );
  }
}
