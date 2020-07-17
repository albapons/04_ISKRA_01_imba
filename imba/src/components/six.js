import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class six extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="six">
            <img
              height="450px"
              width="100%"
              alt="Error"
              src="http://www.imb-academy.com/static/media/competitive-activity-1200x1200px.ea189b86.jpg"
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
              height="450px"
              width="100%"
              alt="Error"
              src="http://www.imb-academy.com/static/media/health-care-imba-1200x1200px.ef202a98.jpg"
            ></img>
          </div>
        </div>

        <div className="row d-flex align-items-center">
          <div className="six">
            <div className="title1 text-white text-center lineHeight">
              ACCOMODATION
            </div>
            <div className="title1 text-white text-center"> AND DINING</div>
            <p className="text text-white text-center px-5 pt-3">
              Shared accommodation in a hall of residence. Weekly meals planned
              by a qualified nutritionist.
            </p>
          </div>
          <div className="six">
            <img
              height="450px"
              width="100%"
              alt="Error"
              src="http://www.imb-academy.com/static/media/accomodation-imba-1200x1200px.945c4801.jpg"
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
      </div>
    );
  }
}
