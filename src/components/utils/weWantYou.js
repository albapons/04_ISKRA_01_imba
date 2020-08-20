import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import "./weWantYou.css";

export default class WeWantYou extends Component {
  render() {
    return (
      <div className="weWantYou">
        <div className="title1">WE WANT YOU</div>
        <p className="text text-center px-5 pt-3">
          IMBA is on the lookout for talented
          <br />
          and passionate players, both men and women,
          <br />
          to lead and build the future of basketball.
        </p>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/joinUs"
        >
          <button className="btn buttonW mt-3">JOIN US!</button>
        </Link>
      </div>
    );
  }
}
