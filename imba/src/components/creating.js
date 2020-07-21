import React, { Component } from "react";
import "./creating.css";
import "../App.css";

export default class creating extends Component {
  render() {
    return (
      <div className="creating">
        <div className="title1 w">CREATING EXCELLENCE.</div>
        <div className="title1 orange lineHeight">CREATING OPPORTUNITIES.</div>
        <div className="text text-center py-5">
          It is a joint venture between the ACB League Basketball Team, Bàsquet
          Manresa, and the university centre Fundació Universitària del Bages
          which focuses both on high sports performance and academic education
          to help young players to develop to the point where they have the
          chance to play in professional basketball leagues all over the world.
          <br />
          <br />
          Our programmes allow players not only to access high performance
          basketball training but also specific training on entrepreneurship or
          in professions connected to the sports field such as coaching, being a
          sports agent or a sports director.
        </div>
        <div className="py-5">
          <a href="https://www.basquetmanresa.com/">
            <img
              className="mx-5"
              height="150px"
              alt="Error"
              src="https://kouten.cat/wp-content/uploads/2019/01/Logo-BAXI-Manresa-250-1.png"
            />
          </a>
          <a href="https://www.umanresa.cat/ca/umanresa-uvic-ucc">
            <img
              className="mx-4"
              height="110px"
              alt="Error"
              src="https://www.joviat.com/wp-content/uploads/Unorganized/LOGO-UMANRESA.jpg"
            />
          </a>
        </div>
      </div>
    );
  }
}
