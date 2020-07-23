import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "./homeRaise.css";

export default class HomeRaise extends Component {
  render() {
    return (
      <div className="three">
        WE RAISE PLAYERS
        <button className="btn buttonO mt-3">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/about"
          >
            MORE ABOUT IMBA
          </Link>
        </button>
      </div>
    );
  }
}
