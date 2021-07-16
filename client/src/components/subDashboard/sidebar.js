import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logoLLL from "./../../img/LLL logo.png";

const sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarLogo">
        <img src={logoLLL}></img>
      </div>
      <div className="sideBarMenu">
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/user" activeClassName="active">
            USER
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/player" activeClassName="active">
            PLAYER
          </NavLink>
        </div>
        <div className="sideBarMenuItem">
          <NavLink to="/dashboard/tournament" activeClassName="active">
            TOURNAMENT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
