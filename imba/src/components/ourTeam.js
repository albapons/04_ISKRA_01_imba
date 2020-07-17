import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./ourTeam.css";

export default class ourTeam extends Component {
  render() {
    return (
      <div className="ourTeam">
        <div className="title1 text-center lineHeight py-5">
          OUR WINNING TEAM
        </div>
        <div className="row m-4 my-5">
          <div className="col">
            <div className="row">
              <div className="col-4 px-5">
                <div className="picture1"></div>
                {/* <img
                  height="150px"
                  width="150px"
                  alt="Error"
                  src="https://www.elperiodicodeaqui.com/netpublisher/minfo/imagenes/9760_basket__2_.jpg"
                ></img> */}
              </div>
              <div className="col-8">
                <div className="title2">JAUME PONSARNAU</div>
                <div className="title3 orange">
                  Professional Basketball Coach
                </div>
              </div>
            </div>
            <div className="row">
              <p className="text px-5 pt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="px-5 bottomLine"></div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4 px-5">
                <div className="picture2"></div>
                {/* <img
                  height="150px"
                  width="150px"
                  alt="Error"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pedro_Mart%C3%ADnez_-_Saski_Baskonia_20171215.jpg/1200px-Pedro_Mart%C3%ADnez_-_Saski_Baskonia_20171215.jpg"
                ></img> */}
              </div>
              <div className="col-8">
                <div className="title2">PEDRO MARTÍNEZ</div>
                <div className="title3 orange">
                  Professional Basketball Coach
                </div>
              </div>
            </div>
            <div className="row">
              <p className="text px-5 pt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="px-5 bottomLine"></div>
            </div>
          </div>
        </div>

        <div className="row m-4 my-5">
          <div className="col">
            <div className="row">
              <div className="col-4 px-5">
                <div className="picture3"></div>
                {/* <img
                  height="150px"
                  width="150px"
                  alt="Error"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Sergio_Llull.jpg"
                ></img> */}
              </div>
              <div className="col-8">
                <div className="title2">SERGI LLULL</div>
                <div className="title3 orange">
                  Professional Basketball Player
                </div>
              </div>
            </div>
            <div className="row">
              <p className="text px-5 pt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="px-5 bottomLine"></div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-4 px-5">
                <div className="picture4"></div>
                {/* <img
                  height="150px"
                  width="150px"
                  alt="Error"
                  src="https://i.ytimg.com/vi/UXV4H_UjWgE/maxresdefault.jpg"
                ></img> */}
              </div>
              <div className="col-8">
                <div className="title2 mb-2">XAVI SCHELLING</div>
                <div className="title3 orange lineHeight">
                  Sport Science Head <br />
                  to Sant Antonio Spurs
                </div>
              </div>
            </div>
            <div className="row">
              <p className="text px-5 pt-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div className="px-5 bottomLine"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
