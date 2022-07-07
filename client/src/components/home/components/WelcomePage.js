import React from "react";
import "../Homepage.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcomePage">
        <h1>JOIN THE COMPETITIVE ESPORT GAMING</h1>
        <h4>CONTEST YOUR SKILL AMONG THE PROS</h4>
        <Link to="/signUp">
          <button className="joinNow">
            <p className="welcomeBtnText">JOIN NOW</p>
          </button>
        </Link>
    </div>
  );
};

export default WelcomePage;
