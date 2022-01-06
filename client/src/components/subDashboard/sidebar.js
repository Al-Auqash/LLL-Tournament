import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logoLLL from "./../../img/LLL logo.png";

const sidebar = () => {
   // const user = () => {
   //    window.location.href = "/dashboard/user";
   // };
   // function tournament() {
   //    window.location.href = "/dashboard/tournament";
   // }
   // function gameServer() {
   //    window.location.href = "/dashboard/gameServer";
   // }
   // function game() {
   //    window.location.href = "/dashboard/game";
   // }

   return (
      <div className="sideBar">
         <div className="sideBarLogo">
            <img src={logoLLL}></img>
         </div>
         <div className="sideBarMenu">
            <div className="sideBarMenuItem" onClick="user()">
               <NavLink
                  exact
                  to="/dashboard/user"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Users
               </NavLink>
            </div>
            <div className="sideBarMenuItem">
               <NavLink
                  exact
                  to="/dashboard/player"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Players
               </NavLink>
            </div>
            <div className="sideBarMenuItem" onClick="tournament()">
               <NavLink
                  exact
                  to="/dashboard/tournament"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Tournaments
               </NavLink>
            </div>
            <div className="sideBarMenuItem" onClick="gameServer()">
               <NavLink
                  exact
                  to="/dashboard/gameServer"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Regions
               </NavLink>
            </div>
            <div className="sideBarMenuItem" onClick="game()">
               <NavLink
                  exact
                  to="/dashboard/game"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Games
               </NavLink>
            </div>
            <div className="sideBarMenuItem">
               <NavLink
                  exact
                  to="/"
                  activeStyle={{ color: "#01cbee", opacity: "1" }}
               >
                  Web
               </NavLink>
            </div>
         </div>
      </div>
   );
};

export default sidebar;
