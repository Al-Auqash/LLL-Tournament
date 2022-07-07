import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav
         id="navBar"
         className="navbar sticky-top navbar-expand-md navbar-dark bg-base-background shadow-sm"
      >
         <div className="container-fluid d-flex flex-row justify-content-space-between m-0">
            <img src="/images/LLL logo.png" width="75"></img>
            <NavLink
               exact
               to="/"
               className="navText navbar-brand"
               activeClassName="active"
            >
               Home
            </NavLink>
            <NavLink
               to="/guide"
               className="navText navbar-brand"
               activeClassName="active"
            >
               Guide
            </NavLink>
            <NavLink
               to="/tournament"
               className="navText navbar-brand"
               activeClassName="active"
            >
               Tournament
            </NavLink>
            <Link to="/signIn" className="btn btn-warning">
               SIGN IN
            </Link>
            <Link to="/signUp" className="btn btn-warning">
               SIGN UP
            </Link>
            {/* <button className="signUp">
          <a href="#" className="navText navbar-brand">Sign Up</a>
        </button> */}
         </div>
      </nav>
   );
};

export default Navbar;
