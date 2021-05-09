import React from "react";
import "./navBar.css";

const navBar = () => {
  return (
    <section id="navBar">
      <div className="navPosition">
        <a className="navText">Home</a>
        <a className="navText">Guide</a>
        <a className="navText">Tournament</a>
        <div className="signIn">
          <a className="navText">Sign In</a>
        </div>
        <p className="navText">or</p>
        <div className="signUp">
          <a className="navText">Sign Up</a>
        </div>
      </div>
    </section>
  );
};

export default navBar;
