import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./navBar.css";
import NavBar2 from "./navBar2";
import style from "./navBar.css";

export default class navBar extends Component {
  constructor() {
    super();
    this.state = {
      programmes: false,
    };
  }

  seeNavBar2 = () => {
    this.setState({ programmes: true });
  };

  dontSeeNavBar2 = () => {
    this.setState({ programmes: false });
  };

  // seeNavBar2 = (e) => {
  //   style.navBar2.display = "flex";
  // };

  // dontSeeNavBar2 = (e) => {
  //   style.navBar2.display = "none";
  // };

  render() {
    return (
      <div className="navBar" onMouseLeave={(e) => this.dontSeeNavBar2(e)}>
        <div className="navBar1">
          <Link to="/">
            <div>
              <img
                height="120px"
                alt="Error"
                src="http://www.imb-academy.com/static/media/logo.f5740aa0.svg"
              />
            </div>
          </Link>

          <div className="row title3">
            <p className="mx-4">IMBA</p>
            <p className="mx-4" onMouseOver={(e) => this.seeNavBar2(e)}>
              PROGRAMMES
            </p>
            <p className="mx-4">SERVICES</p>
            <Link to="/contact">
              <p className="mx-4">CONTACT</p>
            </Link>
          </div>
          <div className="joinUs title3">JOIN US!</div>
        </div>

        {/* <NavBar2 /> */}
        {this.state.programmes && <NavBar2 />}
      </div>
    );
  }
}
