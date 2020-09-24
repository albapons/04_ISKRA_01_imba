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
            src="/images/LOGOS/LOGO_baxi.png"
          />
        </a>
        <a href="https://www.umanresa.cat/ca/umanresa-uvic-ucc">
          <img
            className="mx-4"
            height="80px"
            alt="Error"
            src="/images/LOGOS/LOGO_UManresa.png"
          />
        </a>
      </div>
    );
  }
}
