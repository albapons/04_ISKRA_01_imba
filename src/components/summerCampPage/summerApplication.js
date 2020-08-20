import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import "./summerApplication.css";

export default class summerApplication extends Component {
  render() {
    return (
      <div className="application">
        <div className="title2 px-5">APPLICATION</div>
        <div className="text3">
          After initiating the application process, our legal department will
          create a contract agreement and send it to the player within 24 hours
        </div>
        <div className="d-flex justify-content-center px-5">
          <button className="buttonO mt-3">
            <Router>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/contact"
              >
                APPLY NOW
              </Link>
            </Router>
          </button>
        </div>
      </div>
    );
  }
}
