import React from "react";
import "./welcomePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const welcomePage = () => {
  return (
    <div className="welcomePage">
      {/* <div className="background"> */}
        <h1>JOIN THE COMPETITIVE ESPORT GAMING</h1>
        <h4>CONTEST YOUR SKILL AMONG THE PROS</h4>
        <Link to="/signUp" className="btnPosition">
          <button className="joinNow">
            <p className="btnText">Join Now</p>
          </button>
        </Link>
      {/* </div> */}
    </div>
  );
};

export default welcomePage;
