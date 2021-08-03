import React from "react";
import "./navBar.css";
import { NavLink, Link } from "react-router-dom";
import logoLLL from "./../img/LLL logo.png";

const navBar = () => {
  
  return (
    <section id="navBar">
      <img src={logoLLL}></img>
      <div className="navPosition">
        <NavLink exact to="/" className="navText" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/guide" className="navText" activeClassName="active">
          Guide
        </NavLink>
        <NavLink to="/tournament" className="navText" activeClassName="active">
          Tournament
        </NavLink>
        <Link to="/signIn" className="btnPosition">
          <button className="signIn">
            <p className="btnText">SIGN IN</p>
          </button>
        </Link>
        <p className="navText">or</p>
        <Link to="/signUp" className="btnPosition">
          <button className="signUp">
            <p className="btnText">SIGN UP</p>
          </button>
        </Link>

        {/* <button className="signUp">
          <a href="#" className="navText">Sign Up</a>
        </button> */}
      </div>
    </section>
  );
};

export default navBar;
