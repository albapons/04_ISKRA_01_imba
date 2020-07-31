import React from "react";
import "./programmesPage.css";

export default function programmeFeatures({ icon, title, text }) {
  return (
    <div className="text-center  programmesFeaturesBox">
      <img alt="Error" src={icon} height="90px"></img>
      <div className="title3 my-2">{title}</div>
      {text && <div className="text3">{text}</div>}
    </div>
  );
}
