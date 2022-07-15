import React from "react";
import "../Homepage.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
   return (
      <div className="welcomePage fw-bold">
         <h1>JOIN THE COMPETITIVE ESPORT GAMING</h1>
         <h4>CONTEST YOUR SKILL AMONG THE PROS</h4>
         <Link to="/signUp">
            <button className="btn btn-danger welcomeBtnText px-4 py-2">JOIN NOW</button>
         </Link>
      </div>
   );
};

export default WelcomePage;
