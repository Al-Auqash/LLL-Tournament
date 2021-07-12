import React from "react";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarLogo">LOGO</div>
      <div className="sideBarMenu">
        <div className="sideBarMenuItem">
          <Link to="/dashboard/user">User</Link>
        </div>
        <div className="sideBarMenuItem">
          <Link to="/dashboard/player">Player</Link>
        </div>
        <div className="sideBarMenuItem">
          <Link to="/dashboard/tournament">Tournament</Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
