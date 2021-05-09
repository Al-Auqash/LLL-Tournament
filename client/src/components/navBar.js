import React from "react";
import "./navBar.css";

const navBar = () => {
  return (
    <section id="navBar">
      <div className="navPosition">
        <a href="#" className="navText">Home</a>
        <a href="#" className="navText">Guide</a>
        <a href="#" className="navText">Tournament</a>
        <a href="#" className="btnPosition">
        <button className="signIn">
          <p className="btnText">Sign In</p>
        </button>
        </a>
        <p className="navText">or</p>
        <a href="#" className="btnPosition">
        <button className="signUp">
          <p className="btnText">Sign Up</p>
        </button>
        </a>
        
        
        {/* <button className="signUp">
          <a href="#" className="navText">Sign Up</a>
        </button> */}
      </div>
    </section>
  );
};

export default navBar;
