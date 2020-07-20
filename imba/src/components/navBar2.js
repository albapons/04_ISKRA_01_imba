import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../App.css";
import "./navBar.css";

export default class navBar2 extends Component {
  render() {
    return (
      <div className="navBar2">
        <Link to="/summerCamp">
          <div className="col title4">SUMMER CAMP 2019</div>
        </Link>
        <Link to="/18years">
          <div className="col title4">FROM 18 YEARS OLD</div>
        </Link>
        <Link to="/16years">
          <div className="col title4">FROM 16 YEARS OLD</div>
        </Link>
      </div>
    );
  }
}
