import React from "react";
import "./footer.css";
import twitches from "../img/twitches.png";
import instagram from "../img/instagram.png";
import twitters from "../img/twitters.png";
// import steam from "../img/steam.png";
import logoLLL from "./../img/LLL logo.png";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <section id="footer">
      <div className="footerContent aboutPosition">
        <Link to="/dashboard">
          <img className="footerAboutLogo" src={logoLLL} />
        </Link>
        <p className="footerAboutText">
          ©LLL-Tournament is made by itash, ©made in 2021, All rights reserved.
        </p>
      </div>
      <div className="footerContent">
        <ul>
          <li className="footerTitle">CONTACT US!</li>
          <a
            href="https://www.instagram.com/ilham_tawakhal/"
            className="contactItem"
          >
            <img src={instagram}></img>
            <li>Instagram</li>
          </a>
          <a href="https://twitter.com/Ilham_tawakhal" className="contactItem">
            <img src={twitters}></img>
            <li>Twitter</li>
          </a>
          <a href="https://www.twitch.tv/itash__" className="contactItem">
            <img src={twitches}></img>
            <li>Twitch</li>
          </a>
        </ul>
      </div>
      <div className="footerContent">
        <ul>
          <li className="footerTitle">HELP</li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Supports</a>
          </li>
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>
            <a>Privacy and Policy</a>
          </li>
        </ul>
      </div>
      <div className="footerContent">
        <ul>
          <li className="footerTitle">INFORMATIONS</li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default footer;
