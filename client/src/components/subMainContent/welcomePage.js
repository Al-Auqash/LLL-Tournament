import React from "react";
import "./welcomePage.css";

const welcomePage = () => {
  return (
    <div className="welcomePage">
      {/* <div className="background"></div> */}
        <h1>JOIN THE COMPETITIVE ESPORT GAMING</h1>
        <h4>CONTEST YOUR SKILL AMONG THE PROS</h4>
        <a href="#" className="btnPosition">
          <button className="signIn">
            <p className="btnText">Join Now</p>
          </button>
        </a>
    </div>
  );
};

export default welcomePage;
