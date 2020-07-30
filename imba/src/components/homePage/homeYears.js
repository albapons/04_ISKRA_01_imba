import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import "./homeYears.css";

export default class HomeYears extends Component {
  render() {
    return (
      <div className="homeYears">
        <div className="col-md-5">
          <div className="title1 text-dark text-center">FROM</div>
          <div className="title1 text-dark text-center">
            <span className="orange">18</span> YEARS OLD
          </div>
          <p className="text text-dark text-center px-5">
            Work towards your future as a <br />
            basketball player while completing
            <br />
            secondary school.
          </p>
          <div className="d-flex justify-content-center">
            <button className="buttonO mt-3">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/programmes"
              >
                SEE THE PROGRAMME
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <img
            alt="Error"
            src="http://www.imb-academy.com/static/media/basket-ball-iskra-265x182px.e47a35b1.png"
          ></img>
        </div>
        <div className="col-md-5">
          <div className="title1 text-dark text-center lineHeight">FROM</div>
          <div className="title1 text-dark text-center">
            <span className="orange">16</span> YEARS OLD
          </div>
          <p className="text text-dark text-center px-5">
            Develop your talent as a<br />
            professional basketball player with
            <br />
            a comprehensive and versatile
            <br /> academic programme.
          </p>
          <div className="d-flex justify-content-center">
            <button className="buttonO mt-3">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/programmes"
              >
                SEE THE PROGRAMME
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
