import React from "react";
import "../summerCampPage/summerProgramme.css";
import "../../App.css";

export default function programmesHeader({ black, orange, first }) {
  return (
    <div className="programmesHeader title1 lineHeight text-center">
      {first === "black" && (
        <div>
          <span>{black}</span> <span className="orange">{orange} </span>
        </div>
      )}
      {first === "orange" && (
        <div>
          <span className="orange">{orange}</span> {black}
        </div>
      )}
    </div>
  );
}
