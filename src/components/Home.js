import React, { useEffect } from "react";
import "./Home.css";
import suds from "../images/suds.jpg";
import { analytics } from "../firebase-config"
import { logEvent} from "firebase/analytics";

export default function Home() {

  useEffect(()=> {
    logEvent(analytics, "home page visit");
  });

  return (
    <div className="isaac">
      <div className="lander">
        <h2 id="title">Hi, my name is Isaac and this is in progress.</h2>
        <p>Check out my links and resume below!</p>
      </div>
    </div>
  );
}