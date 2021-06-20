import React from "react";
import { Link } from "react-router-dom";
import "./works.css";
import signUpIcon from "../../img/SignUp.svg";
import contestIcon from "../../img/Contest.svg";
import prizesIcon from "../../img/Prizes.svg";

const works = () => {
  return (
    <div className="works">
      <div className="title">
        <h1>HOW GCC WORKS</h1>
      </div>
      <div className="worksCard">
        <div className="card">
          <img className="cardImage" src={signUpIcon}></img>
          <h2>SIGN UP</h2>
          <p>
            Create an account, choose your game, invite friends to join your
            team, and join the game tournaments
          </p>
        </div>
        <div className="card">
          <img className="cardImage" src={contestIcon}></img>
          <h2>CONTEST</h2>
          <p>
            Join the game with the terms and condition of the tournament host
            and compete against pros to become the champion of the game
          </p>
        </div>
        <div className="card">
          <img className="cardImage" src={prizesIcon}></img>
          <h2>PRIZES</h2>
          <p>
            Get your prizes by winning the game against pros from the tournament
          </p>
        </div>
      </div>
      <div className="learnMore">
        <a href="/help">Learn More About GCC ...</a>
      </div>
    </div>
  );
};

export default works;
