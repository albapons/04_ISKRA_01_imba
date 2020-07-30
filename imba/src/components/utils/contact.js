import React, { Component } from "react";
import Footer1 from "../utils/footer1";
import Footer2 from "../utils/footer2";
import SelectCountries from "../utils/selectCountries";
import "../../App.css";
import "./contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      country: null,
      message: "",
      agreement: false,
    };
  }

  handleInput = (e) => {
    console.log(e.value);

    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  setCountry = (country) => {
    this.setState({
      country: country,
    });
  };

  agreementChecked = (e) => {
    var agreement = document.getElementById("agreement");
    // console.log(agreement.checked);
    if (agreement.checked) {
      this.setState({
        agreement: true,
      });
    } else if (!agreement.checked) {
      this.setState({
        agreement: false,
      });
    }
  };

  sendComment = () => {
    const {
      firstName,
      lastName,
      email,
      country,
      message,
      agreement,
    } = this.state;

    // We create a newMessage
    const newMessage = {
      firstName,
      lastName,
      email,
      country,
      message,
      agreement,
    };

    // We need to send this message
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      country,
      message,
      agreement,
    } = this.state;

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
                  value={firstName}
                  onChange={(e) => this.handleInput(e)}
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
                  value={lastName}
                  onChange={(e) => this.handleInput(e)}
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
                  value={email}
                  onChange={(e) => this.handleInput(e)}
                  className="inputText text"
                  placeholder="E-mail"
                />
              </div>
              <div className="col">
                <label className="title4" htmlFor="country">
                  Country
                </label>
                <SelectCountries setCountry={this.setCountry} />
                {/* <SelectCountries /> */}
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
                  value={message}
                  onChange={(e) => this.handleInput(e)}
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
                value={agreement}
                onChange={(e) => this.agreementChecked(e)}
              />
              <label className="custom-control-label text2" htmlFor="agreement">
                By entering my data and pressing the button "Send" I agree to my
                e-mail address and my name being used to answer my contact
                request.
              </label>
            </div>
          </div>
          <button className="btn buttonO" onClick={(e) => this.sendComment()}>
            SEND
          </button>
        </div>
        <Footer1 />
        <Footer2 />
      </div>
    );
  }
}
