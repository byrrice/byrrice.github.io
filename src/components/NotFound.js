import React from "react";
import "./NotFound.css";
import construction from "../images/construction.gif"

export default function NotFound() {
  return (
    <div className="NotFound text-center">
      <h3>Under Construction!</h3>
      <img src={construction}></img>
    </div>
  );
}