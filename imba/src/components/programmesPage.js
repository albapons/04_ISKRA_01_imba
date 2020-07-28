import React, { Component } from "react";
import ProgrammesFeatures from "./programmesFeatures";
import ProgrammesHeader from "./programmesHeader";
import ImgFull from "./imgFull";
import Header from "./header";
import WeWantYou from "./weWantYou";
import Contact from "./contact";
import "../App.css";

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
                src="http://www.imb-academy.com/static/media/from-18-years-program-imba-1200x1200px.6006dc87.jpg"
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
            icon={
              "http://www.imb-academy.com/static/media/physical-conditioning.a76e6297.svg"
            }
            title={"PHYSICAL CONDITIONING"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/individual-skills.f780c5bb.svg"
            }
            title={"INDIVIDUAL SKILLS"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/individual-tactics.339d217a.svg"
            }
            title={"INDIVIDUAL TACTICS"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/collective-tactics.df77ce92.svg"
            }
            title={"COLLECTIVE TACTICS"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/emotional-training.31b0ee25.svg"
            }
            title={"EMOTIONAL TRAINING"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/performance-programmes.190dee9a.svg"
            }
            title={"PERFORMANCE TRAINING"}
          />
        </div>
        <ImgFull
          src={
            "http://www.imb-academy.com/static/media/training-imba-1200x520px.7870f45b.jpg"
          }
        />
        <ProgrammesHeader
          black={"COMBINE YOUR SPORTS CAREER WITH YOUR"}
          orange={"HIGHER EDUCATION"}
          first={"black"}
        />
        <div className="programmesFeatures">
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/professional-development.d16b7754.svg"
            }
            title={"PROFESSIONAL DEVELOPMENT"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/marketing.d59bf3bb.svg"
            }
            title={"HIGHER VOCATIONAL DEGREES"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/sports-management.e16d86e9.svg"
            }
            title={"SPORTS MANAGEMENT DEGREE"}
          />
        </div>
        <ImgFull
          src={
            "http://www.imb-academy.com/static/media/higuer-education-imba-1200x520px.1de8a5fb.jpg"
          }
        />
        <ProgrammesHeader
          black={"IN RESIDENCE"}
          orange={"ACCOMODATION"}
          first={"orange"}
        />
        <div className="programmesFeatures">
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/residence.450ce96c.svg"
            }
            title={"RESIDENCE"}
            text={"Accommodation in residence"}
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/individual-meals.5cce8025.svg"
            }
            title={"INDIVIDUAL MEALS"}
            text={
              "Includes a plan of meals specially designed by a nutritionist to fit your needs"
            }
          />
          <ProgrammesFeatures
            icon={
              "http://www.imb-academy.com/static/media/university-life.0352f9a5.svg"
            }
            title={"UNIVERSITY LIFE"}
            text={"Live and study at the heart of the university campus"}
          />
        </div>
        <ImgFull
          src={
            "http://www.imb-academy.com/static/media/accommodation-imba-1200x520px.0e45170f.jpg"
          }
        />
        <WeWantYou />
        <Contact />
      </div>
    );
  }
}
