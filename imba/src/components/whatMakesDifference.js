import React, { Component } from "react";
import "./whatMakesDifference.css";
import "../App.css";

export default class whatMakesDifference extends Component {
  render() {
    return (
      <div className="whatMakesDifference">
        <span>WHAT MAKES US</span> <span className="orange">DIFFERENT</span>
        <div className="icons">
          <div className="icon-container">
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/university-diploma-gris.ec749682.svg"
              className="icon"
            ></img>
            {/* taronja */}
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/university-diploma-tronja.2df1e829.svg"
              className="icon"
            ></img>
          </div>

          <div className="icon-container">
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/university-campus-gris.31a1cb40.svg"
              className="icon"
            ></img>
            {/* taronja */}

            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/university-campus-tronja.bed83621.svg"
              className="icon"
            ></img>
          </div>

          <div className="icon-container">
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/cloud-services-gris.e3263800.svg"
              className="icon"
            ></img>
            {/* taronja */}
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/cloud-services-tronja.1a9e986e.svg"
              className="icon"
            ></img>
          </div>

          <div className="icon-container">
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/local-team-gris.fba8d8d7.svg"
              className="icon"
            ></img>
            {/* taronja */}
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/local-team-tronja.e8a3acec.svg"
              className="icon"
            ></img>
          </div>

          <div className="icon-container">
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/european-leagues-gris.939e73fe.svg"
              className="icon"
            ></img>
            {/* taronja */}
            <img
              alt="Error"
              src="http://www.imb-academy.com/static/media/european-leagues-tronja.0dd572b9.svg"
              className="icon"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
