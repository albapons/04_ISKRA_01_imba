import React, { Component } from "react";
import "../../App.css";
import "./aboutImba.css";

export default class AboutImba extends Component {
  render() {
    return (
      <div className="imba">
        {/* <div>
          <img
            height="140px"
            alt="Error"
            src="http://www.imb-academy.com/static/media/logo-imba-blanc.a4c6b748.svg"
          />
        </div> */}
        <div>
          <p className="text-center pt-5">
            THE INTERNATIONAL MANRESA BASKETBALL ACADEMY (IMBA) <br />
            IS A PRIVATE ACADEMY OF PROFESSIONAL AND PERSONAL
            <br />
            DEVELOPMENT FOR BASKETBALL PLAYERS,
            <br />
            BOTH MEN AND WOMEN.
          </p>
        </div>
      </div>
    );
  }
}
