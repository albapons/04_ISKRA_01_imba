import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class navBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navBar2">
          <img
            height="120px"
            alt="Error"
            src="http://www.imb-academy.com/static/media/logo.f5740aa0.svg"
          />
        </div>
        <div className="row">
          <p className="mx-4">IMBA</p>
          <p className="mx-4">PROGRAMMES</p>
          <p className="mx-4">SERVICES</p>
          <p className="mx-4">CONTACT</p>
        </div>
        <div className="joinUs">JOIN US!</div>
      </div>
    );
  }
}
