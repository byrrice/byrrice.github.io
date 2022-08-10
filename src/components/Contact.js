import React from "react";
import cat from "../images/cat.png";
import { analytics } from "../firebase-config"
import { logEvent} from "firebase/analytics";

export default function Contact() {

  const logCatClick = () => {
    console.log("CAT CLICKER IDENTIFIED");
    logEvent(analytics, "stop clicking the cat");
  }

  return (
    <div className="isaac">
      <h2 id="title">CLICK ME PLS</h2>
      <img src={cat} onClick={logCatClick}/>
    </div>
  );
}