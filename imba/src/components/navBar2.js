import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "./navBar.css";

export default class navBar2 extends Component {
  render() {
    return (
      <div className="navBar2">
        <div className="col title4">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/summerCamp"
          >
            SUMMER CAMP 2019
          </Link>
        </div>
        <div className="col title4">
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
              textalign: "center",
            }}
            to="/18years"
          >
            FROM 18 YEARS OLD
          </Link>
        </div>
        <div className="col title4">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/16years"
            className="text-center"
          >
            FROM 16 YEARS OLD
          </Link>
        </div>
      </div>
    );
  }
}
