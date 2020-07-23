import React, { Component } from "react";
import "./summerOurTeam.css";
import "../App.css";

export default class summerOurTeam extends Component {
  render() {
    return (
      <div className="summerOurTeam">
        <div className="title1 text-center lineHeight py-5">
          OUR WINNING TEAM
        </div>

        <div className="row px-5">
          <div className="col text3">
            <p className="title3 orange">MANAGAMENT STAFF</p>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">MARC BERNADICH</div>
                <div>Director</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">JOSEP RIERA</div>
                <div>Head of the Sports Area PHYSICAL</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>

            <div>
              <p className="title3 orange">TRAINER</p>
              <div className="row d-flex p-3">
                <div className="square"></div>
                <div className="col">
                  <div className="title4">NIL LLOBET</div>
                  <div>Coordinator</div>
                  <i className="fas fa-plus-square orange fa-2x"></i>
                </div>
              </div>
            </div>

            <div>
              <p className="title3 orange">GUEST SPEAKERS</p>
              <div className="row d-flex p-3">
                <div className="square"></div>
                <div className="col">
                  <div className="title4">JOSEP VIVES</div>
                  <div>FC Barcelona Spokesman</div>
                  <i className="fas fa-plus-square orange fa-2x"></i>
                </div>
              </div>
              <div className="row d-flex p-3">
                <div className="square"></div>
                <div className="col">
                  <div className="title4">JOSEP SÁEZ</div>
                  <div>Baxi Manresa President</div>
                  <i className="fas fa-plus-square orange fa-2x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col text3">
            <p className="title3 orange">PROFESSORS</p>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">MARC BERNADICH</div>
                <div>Professor of Strategy</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">VÍCTOR JORDAN </div>
                <div>Professor of ICT</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">JORDI FRANCH </div>
                <div>Professor of Economics </div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">MOISÈS ROJAS </div>
                <div>Professor of Finance & Accounting</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">FRANCESC RUFAS</div>
                <div>Professor of Marketing</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">LUKAS DORDA</div>
                <div>Professor of Sponsorship</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
          </div>

          <div className="col text3">
            <p className="title3 orange">MASTERCLASSES</p>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">JAUME PONSARNAU </div>
                <div>Valencia basketball head coach </div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">PERE TOMÀS </div>
                <div>Baxi Manresa Player </div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
            <div className="row d-flex p-3">
              <div className="square"></div>
              <div className="col">
                <div className="title4">PEDRO MARTÍNEZ</div>
                <div>Gran Canaria coach</div>
                <i className="fas fa-plus-square orange fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
