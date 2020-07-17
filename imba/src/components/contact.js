import React, { Component } from "react";
import "../App.css";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-pad">
          <div className="title1 text-white text-center">CONTACT</div>
          <p className="text text-white text-center px-5 pt-3">
            Looking for the fastest way to have all your questions answered?
          </p>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <button className="btn buttonO">SEND</button>
        </div>
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
        <div className="footer2">
          <div className="col d-flex justify-content-center">
            <div className="title5 text-white mx-3">LEGAL NOTE</div>
            <div className="title5 text-white">DATA PROTECTION</div>
          </div>
          <div className="col d-flex justify-content-center">
            <i className="fab fa-twitter fa-2x mx-2" />
            <i className="fab fa-facebook fa-2x mx-2" />
            <i className="fab fa-instagram fa-2x mx-2" />
            <i className="fab fa-youtube fa-2x mx-2" />
          </div>
          <div className="col d-flex justify-content-center">
            <i className="fas fa-arrow-up fa-2x mx-2" />
          </div>
        </div>
      </div>
    );
  }
}
