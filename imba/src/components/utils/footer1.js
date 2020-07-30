import React, { Component } from "react";
import "../../App.css";
import "../utils/footer1.css";

export default class footer1 extends Component {
  render() {
    return (
      <div className="footer1">
        <div className="title2 mx-5">IMBA IS A PROJECT LEAD BY</div>
        <a href="https://www.basquetmanresa.com/">
          <img
            className="mx-5"
            height="80px"
            alt="Error"
            src="http://www.imb-academy.com/static/media/logo-baxi-blanc.2b1a5e42.svg"
          />
        </a>
        <a href="https://www.umanresa.cat/ca/umanresa-uvic-ucc">
          <img
            className="mx-4"
            height="80px"
            alt="Error"
            src="http://www.imb-academy.com/static/media/logo-umanresa-blanc.2dad6166.svg"
          />
        </a>
      </div>
    );
  }
}
