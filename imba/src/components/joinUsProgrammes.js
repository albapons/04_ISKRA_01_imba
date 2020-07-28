import React, { Component } from "react";
import JoinUsProgrammes16 from "./joinUsProgrammes16";
import JoinUsProgrammes18 from "./joinUsProgrammes18";
import "../App.css";
import "./joinUsProgrammes.css";

export default class joinUsProgrammes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sixteen: false,
      eighteen: false,
    };
  }

  componentDidMount() {
    this.setState({
      sixteen: true,
    });
  }

  select = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    this.setState({ sixteen: false });
    this.setState({ eighteen: false });

    this.setState({
      [id]: true,
    });
  };
  render() {
    const { sixteen, eighteen } = this.state;
    return (
      <div className="joinUsProgrammes">
        <div className="title1 text-center lineHeight py-5">OUR PROGRAMMES</div>
        <div className="twoColumns row w-100 title2">
          {sixteen ? (
            <div
              className="col selected"
              onClick={(e) => this.select(e)}
              id="sixteen"
            >
              FROM <span className="orange">16</span> YEARS OLD
            </div>
          ) : (
            <div
              className="col grey"
              onClick={(e) => this.select(e)}
              id="sixteen"
            >
              FROM 16 YEARS OLD
            </div>
          )}

          {eighteen ? (
            <div
              className="col selected"
              onClick={(e) => this.select(e)}
              id="eighteen"
            >
              FROM <span className="orange">18</span> YEARS OLD
            </div>
          ) : (
            <div
              className="col grey"
              onClick={(e) => this.select(e)}
              id="eighteen"
            >
              FROM 18 YEARS OLD
            </div>
          )}
        </div>
        {sixteen && <JoinUsProgrammes16 />}
        {eighteen && <JoinUsProgrammes18 />}
      </div>
    );
  }
}
