import React, { Component } from "react";
import "../App.css";
import "./footer1.css";

export default class footer1 extends Component {
  render() {
    return (
      <div className="footer1">
        <div className="title2 mx-5">IMBA IS A PROJECT LEAD BY</div>
        <img
          className="mx-5"
          height="80px"
          alt="Error"
          src="http://www.imb-academy.com/static/media/logo-baxi-blanc.2b1a5e42.svg"
        />
        <img
          className="mx-4"
          height="80px"
          alt="Error"
          src="http://www.imb-academy.com/static/media/logo-umanresa-blanc.2dad6166.svg"
        />
      </div>
    );
  }
}
