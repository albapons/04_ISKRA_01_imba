import React, { Component } from "react";
import Footer1 from "../utils/footer1";
import Footer2 from "../utils/footer2";
import SelectCountries from "../utils/selectCountries";
import "../../App.css";
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
          <div className="contactForm">
            <div className="row">
              <div className="col">
                <label className="title4" htmlFor="firstName">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="inputText text"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <label className="title4" htmlFor="firstName">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="inputText text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="title4" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="inputText text"
                  placeholder="E-mail"
                />
              </div>
              <div className="col">
                <label className="title4" htmlFor="country">
                  Country
                </label>
                <SelectCountries />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="title4" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows="4"
                  id="message"
                  name="message"
                  className="textArea text mt-2"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="custom-control custom-checkbox my-3">
              <input
                type="checkbox"
                className="custom-control-input checkbox"
                id="agreement"
              />
              <label className="custom-control-label text2" htmlFor="agreement">
                By entering my data and pressing the button "Send" I agree to my
                e-mail address and my name being used to answer my contact
                request.
              </label>
            </div>
          </div>
          <button className="btn buttonO">SEND</button>
        </div>
        <Footer1 />
        <Footer2 />
      </div>
    );
  }
}
