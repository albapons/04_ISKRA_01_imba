import React, { Component } from "react";
import "./whatMakesDifference.css";
import "../App.css";

export default class whatMakesDifference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diploma: false,
      campus: false,
      cloud: false,
      team: false,
      european: false,
    };
  }

  componentDidMount() {
    this.setState({
      campus: true,
    });
  }

  select = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    this.setState({ diploma: false });
    this.setState({ campus: false });
    this.setState({ cloud: false });
    this.setState({ team: false });
    this.setState({ european: false });

    this.setState({
      [id]: true,
    });
  };

  render() {
    const { diploma, campus, cloud, team, european } = this.state;
    return (
      <div className="whatMakesDifference">
        <div className="title1 text-center lineHeight pt-5">
          WHAT MAKES US <span className="orange">DIFFERENT</span>
        </div>

        <div className="icons">
          {/* DIPLOMA */}
          {diploma ? (
            <div>
              {/* taronja */}
              <div className="icon-container-orange">
                <img
                  alt="Error"
                  src="http://www.imb-academy.com/static/media/university-diploma-tronja.2df1e829.svg"
                  className="icon"
                ></img>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-sort-down orange fa-2x"></i>
              </div>
            </div>
          ) : (
            <div
              className="icon-container"
              onClick={(e) => this.select(e)}
              id="diploma"
            >
              <img
                alt="Error"
                src="http://www.imb-academy.com/static/media/university-diploma-gris.ec749682.svg"
                className="icon"
                id="diploma"
              ></img>
            </div>
          )}

          {/* CAMPUS */}
          {campus ? (
            <div>
              {/* taronja */}
              <div className="icon-container-orange">
                <img
                  alt="Error"
                  src="http://www.imb-academy.com/static/media/university-campus-tronja.bed83621.svg"
                  className="icon"
                ></img>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-sort-down orange fa-2x"></i>
              </div>
            </div>
          ) : (
            <div
              className="icon-container"
              onClick={(e) => this.select(e)}
              id="campus"
            >
              <img
                alt="Error"
                src="http://www.imb-academy.com/static/media/university-campus-gris.31a1cb40.svg"
                className="icon"
                id="campus"
              ></img>
            </div>
          )}

          {/* CLOUD */}
          {cloud ? (
            <div>
              {/* taronja */}
              <div className="icon-container-orange">
                <img
                  alt="Error"
                  src="http://www.imb-academy.com/static/media/cloud-services-tronja.1a9e986e.svg"
                  className="icon"
                ></img>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-sort-down orange fa-2x"></i>
              </div>
            </div>
          ) : (
            <div
              className="icon-container"
              onClick={(e) => this.select(e)}
              id="cloud"
            >
              <img
                alt="Error"
                src="http://www.imb-academy.com/static/media/cloud-services-gris.e3263800.svg"
                className="icon"
                id="cloud"
              ></img>
            </div>
          )}

          {/* TEAM */}
          {team ? (
            <div>
              {/* taronja */}
              <div className="icon-container-orange">
                <img
                  alt="Error"
                  src="http://www.imb-academy.com/static/media/local-team-tronja.e8a3acec.svg"
                  className="icon"
                ></img>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-sort-down orange fa-2x"></i>
              </div>
            </div>
          ) : (
            <div
              className="icon-container"
              onClick={(e) => this.select(e)}
              id="team"
            >
              <img
                alt="Error"
                src="http://www.imb-academy.com/static/media/local-team-gris.fba8d8d7.svg"
                className="icon"
                id="team"
              ></img>
            </div>
          )}

          {/* EUROPEAN */}
          {european ? (
            <div>
              {/* taronja */}
              <div className="icon-container-orange">
                <img
                  alt="Error"
                  src="http://www.imb-academy.com/static/media/european-leagues-tronja.0dd572b9.svg"
                  className="icon"
                ></img>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-sort-down orange fa-2x"></i>
              </div>
            </div>
          ) : (
            <div
              className="icon-container"
              onClick={(e) => this.select(e)}
              id="european"
            >
              <img
                alt="Error"
                src="http://www.imb-academy.com/static/media/european-leagues-gris.939e73fe.svg"
                className="icon"
                id="european"
              ></img>
            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        {diploma && (
          <div className="differenceDescription">
            <div className="title2 orange">UNIVERSITY DIPLOMA</div>
            <div className="text text-center py-3">
              Our academic programme is run by a university and leads to a
              university diploma.
            </div>
          </div>
        )}
        {campus && (
          <div className="differenceDescription">
            <div className="title2 orange">UNIVERSITY CAMPUS</div>
            <div className="text text-center py-3">
              All the programmes take place in a university campus, 25.000m2
            </div>
          </div>
        )}
        {cloud && (
          <div className="differenceDescription">
            <div className="title2 orange">CLOUD SERVICE</div>
            <div className="text text-center py-3">
              Players are in the middle of a cloud of services specially thought
              to fit their needs: training, residence, higher education,
              podiatry and physiotherapy care, sports agent, etc.
            </div>
          </div>
        )}
        {team && (
          <div className="differenceDescription">
            <div className="title2 orange">LOCAL TEAM</div>
            <div className="text text-center py-3">
              Players can join local basketball teams to play in competitive
              local leagues.
            </div>
          </div>
        )}
        {european && (
          <div className="differenceDescription">
            <div className="title2 orange">EUROPEAN LEAGUES</div>
            <div className="text text-center py-3">
              Agreements with international agents to foster the access of the
              best players to top European Basket leagues.
            </div>
          </div>
        )}
      </div>
    );
  }
}
