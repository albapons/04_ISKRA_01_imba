import React from "react";
import "../utils/header.css";
import "../../App.css";

export default function Header({ title }) {
  return (
    <div className="header title0">
      <span>{title}</span>
    </div>
  );
}
