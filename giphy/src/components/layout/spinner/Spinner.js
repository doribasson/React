import React from "react";
import "./spinner.scss";

export default function Spinner() {
  return (
    <div className="spinner_container">
      <div className="spinner">
        <span>...loading</span>
      </div>
    </div>
  );
}
