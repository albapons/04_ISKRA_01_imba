import React, { Component } from "react";
import ProgrammesFeatures from "./programmesFeatures";
import ProgrammesHeader from "./programmesHeader";
import ImgFull from "../utils/imgFull";
import Header from "../utils/header";
import WeWantYou from "../utils/weWantYou";
import Contact from "../utils/contact";
import "../../App.css";

export default class programmesPage extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"PROGRAMMES"} />
        <div className="cent">
          <div className="row d-flex justify-content-center">
            <div className="mid">
              <div className="title1 text-white lineHeight px-5">
                FROM 18 YEARS OLD
              </div>
              <p className="text text-white px-5 pt-3">
                Develop your talent as a professional basketball player with a
                comprehensive and versatile academic programme that includes
                personal branding, personal financial management, communication
                skills and alternative career options within the sports
                industry.
              </p>
            </div>
            <div className="mid">
              <img
                height="auto"
                width="100%"
                alt="Error"
                src="/images/programmes.jpg"
              ></img>
            </div>
          </div>
        </div>
        <ProgrammesHeader
          black={"SPORTS HIGH PERFORMANCE"}
          orange={"TRAINING"}
          first={"black"}
        />
        <div className="programmesFeatures">
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_physical-conditioning.png"}
            title={"PHYSICAL CONDITIONING"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_individual-skills.png"}
            title={"INDIVIDUAL SKILLS"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_individual-tactics.png"}
            title={"INDIVIDUAL TACTICS"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_collective-tactics.png"}
            title={"COLLECTIVE TACTICS"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_emocional-training.png"}
            title={"EMOTIONAL TRAINING"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_performance-training.png"}
            title={"PERFORMANCE TRAINING"}
          />
        </div>
        <ImgFull src={"/images/programmes-fully1.jpg"} />
        <ProgrammesHeader
          black={"COMBINE YOUR SPORTS CAREER WITH YOUR"}
          orange={"HIGHER EDUCATION"}
          first={"black"}
        />
        <div className="programmesFeatures">
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_professional-development.png"}
            title={"PROFESSIONAL DEVELOPMENT"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_higher-vocacional-degrees.png"}
            title={"HIGHER VOCATIONAL DEGREES"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_sports-management-degree.png"}
            title={"SPORTS MANAGEMENT DEGREE"}
          />
        </div>
        <ImgFull src={"/images/programmes-fully2.jpg"} />

        <ProgrammesHeader
          black={"IN RESIDENCE"}
          orange={"ACCOMODATION"}
          first={"orange"}
        />
        <div className="programmesFeatures">
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_residence.png"}
            title={"RESIDENCE"}
            text={"Accommodation in residence"}
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_individual-meals.png"}
            title={"INDIVIDUAL MEALS"}
            text={
              "Includes a plan of meals specially designed by a nutritionist to fit your needs"
            }
          />
          <ProgrammesFeatures
            icon={"/images/ICONS/ICON_university-life.png"}
            title={"UNIVERSITY LIFE"}
            text={"Live and study at the heart of the university campus"}
          />
        </div>
        <ImgFull src={"/images/programmes-fully3.jpg"} />

        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
