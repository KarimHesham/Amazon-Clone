import React from "react";
import "../css/Backdrop.css";

function backdrop(props) {
  return <div className="backdrop" onClick={props.click}></div>;
}

export default backdrop;
