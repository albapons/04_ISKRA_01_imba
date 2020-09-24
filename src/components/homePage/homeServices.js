import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import "./homeServices.css";

export default class homeServices extends Component {
  render() {
    return (
      <div className="homeServices">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/services"
        >
          <div className="homeServicesRow">
            <div className="six">
              <img
                height="408px"
                width="100%"
                alt="Error"
                src="/images/services1.jpg"
              ></img>
            </div>
            <div className="six">
              <div className="title1 text-white text-center lineHeight">
                COMPETITIVE
              </div>
              <div className="title1 text-white text-center"> ACTIVITY</div>
              <p className="text text-white text-center px-5 pt-3">
                Daily training to reach professional standards in basketball
                skills and physical abilities to be able to play in professional
                basketball leagues.
              </p>
            </div>
            <div className="six">
              <img
                height="408px"
                width="100%"
                alt="Error"
                src="/images/services2.jpg"
              ></img>
            </div>
          </div>

          <div className="homeServicesRow">
            <div className="six">
              <div className="title1 text-white text-center lineHeight">
                ACCOMODATION
              </div>
              <div className="title1 text-white text-center"> AND DINING</div>
              <p className="text text-white text-center px-5 pt-3">
                Shared accommodation in a hall of residence. Weekly meals
                planned by a qualified nutritionist.
              </p>
            </div>
            <div className="six">
              <img
                height="408px"
                width="100%"
                alt="Error"
                src="/images/services3.jpg"
              ></img>
            </div>
            <div className="six">
              <div className="title1 text-white text-center lineHeight py-3">
                HEALTH CARE
              </div>
              <p className="text text-white text-center px-5 pt-3">
                Professionals at the University Clinic will look after each
                player’s physical health and emotional wellbeing.
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
