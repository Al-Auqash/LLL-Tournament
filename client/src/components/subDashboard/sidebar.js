import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/dashboard/user">USER</Link>
        </div>
        <div className="sideBarMenuItem">
          <Link to="/dashboard/player">PLAYER</Link>
        </div>
        <div className="sideBarMenuItem">
          <Link to="/dashboard/tournament">TOURNAMENT</Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
