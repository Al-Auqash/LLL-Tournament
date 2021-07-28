import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logoLLL from "./../../img/LLL logo.png";

const sidebar = () => {

  function tournament(){
    window.location.href="/dashboard/tournament";
  }
  
  return (
    <div className="sideBar">
      <div className="sideBarLogo">
        <img src={logoLLL}></img>
      </div>
      <div className="sideBarMenu">
        <div className="sideBarMenuItem" >
          <NavLink to="/dashboard/user" activeClassName="active">
            Users
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/player" activeClassName="active">
            Players
          </NavLink>
        </div>
        <div className="sideBarMenuItem" onClick="tournament()">
          <NavLink to="/dashboard/tournament" activeClassName="active">
            Tournaments
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/tournament" activeClassName="active">
            Regions
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/tournament" activeClassName="active">
            Games
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
