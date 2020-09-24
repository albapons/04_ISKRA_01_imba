import React, { Component } from "react";
import "./agents.css";
import "../../App.css";

export default class Agents extends Component {
  render() {
    return (
      <div className="agents">
        <div className="title2 text-center mb-3">
          IMBA HAVE PARTNERSHIP AGREEMENTS WITH INTERNATIONAL AGENTS
          <br /> TO FOSTER THE ACCESS OF THE BEST PLAYERS TO TOP EUROPEAN BASKET
          LEAGUES.
        </div>

        <div>
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_ligaendesa.png"
          />
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_ligi.png"
          />
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_bbkbbl.png"
          />
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_lba.png"
          />
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_lnb.png"
          />
          <img
            className="mx-2"
            height="130px"
            alt="Error"
            src="/images/LOGOS/LOGO_esake.png"
          />
        </div>
      </div>
    );
  }
}
