import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default class WeWantYou extends Component {
  render() {
    return (
      <div className="weWantYou">
        <div className="title1 text-white text-center">WE WANT YOU</div>
        <p className="text text-white text-center px-5 pt-3">
          IMBA is on the lookout for talented
          <br />
          and passionate players, both men and women,
          <br />
          to lead and build the future of basketball.
        </p>
        <button className="btn buttonW mt-3">JOIN US!</button>
      </div>
    );
  }
}
