import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar2 from "./navBar2";
import "../../App.css";
import "./navBar.css";
// import style from "./navBar.css";

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
          <div className="col">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              <img
                height="120px"
                alt="Error"
                src="http://www.imb-academy.com/static/media/logo.f5740aa0.svg"
              />
            </Link>
          </div>
          <div className="col">
            <div className="row d-flex justify-content-end pr-4 title4">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/about"
              >
                <p className="mx-3">IMBA</p>
              </Link>
              <p className="mx-3" onMouseOver={(e) => this.seeNavBar2(e)}>
                PROGRAMMES
              </p>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/services"
              >
                <p className="mx-3">SERVICES</p>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/contact"
              >
                <p className="mx-3">CONTACT</p>
              </Link>
            </div>
          </div>

          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/joinUs"
          >
            <div className="joinUs title3">JOIN US!</div>
          </Link>
        </div>

        {/* <NavBar2 /> */}
        {this.state.programmes && <NavBar2 />}
      </div>
    );
  }
}
