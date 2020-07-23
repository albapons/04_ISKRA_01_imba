import React from "react";
import "./header.css";
import "../App.css";

export default function logo({ height }) {
  return (
    <div>
      <img
        height={height}
        alt="Error"
        src="http://www.imb-academy.com/static/media/logo.f5740aa0.svg"
      />
    </div>
  );
}
