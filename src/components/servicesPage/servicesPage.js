import React, { Component } from "react";
import Header from "../utils/header";
import Contact from "../utils/contact";
import "../../App.css";
import "./servicesPage.css";

export default class servicesPage extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"SERVICES"} />
        <div className="cent">
          <div className="row">
            <div className="mid">
              <div className="title1 text-white text-center lineHeight">
                COMPETITIVE
              </div>
              <div className="title1 text-white text-center"> ACTIVITY</div>
              <p className="text text-white text-center px-5 pt-3">
                Daily training to reach professional <br /> standards in
                basketball skills and <br /> physical abilities to be able to
                play in <br /> professional basketball leagues.
              </p>
            </div>
            <div className="mid">
              <img
                height="auto"
                width="100%"
                alt="Error"
                src="/images/services1.jpg"
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="mid">
              <img
                height="auto"
                width="100%"
                alt="Error"
                src="/images/services2.jpg"
              ></img>
            </div>
            <div className="mid">
              <div className="title1 text-white text-center lineHeight">
                ACCOMODATION
              </div>
              <div className="title1 text-white text-center"> ACTIVITY</div>
              <p className="text text-white text-center px-5 pt-3">
                Shared accommodation in a hall of <br />
                residence. Weekly meals planned by <br />a qualified
                nutritionist.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="mid">
              <div className="title1 text-white text-center lineHeight">
                HEALTH CARE
              </div>
              <div className="title1 text-white text-center"> ACTIVITY</div>
              <p className="text text-white text-center px-5 pt-3">
                Professionals at the University Clinic
                <br /> will look after each player’s physical <br />
                health and emotional wellbeing.
              </p>
            </div>
            <div className="mid">
              <img
                height="auto"
                width="100%"
                alt="Error"
                src="/images/services3.jpg"
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="mid">
              <img
                height="auto"
                width="100%"
                alt="Error"
                src="/images/services4.jpg"
              ></img>
            </div>
            <div className="mid">
              <div className="title1 text-white text-center lineHeight">
                MENTORING
              </div>
              <div className="title1 text-white text-center"> ACTIVITY</div>
              <p className="text text-white text-center px-5 pt-3">
                Senior basketball players
                <br /> mentor the young ones.
              </p>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    );
  }
}
