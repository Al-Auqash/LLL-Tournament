import React from "react";
import "../Homepage.css";
import Card from "./Card";

const works = () => {
   return (
      <div className="works">
         <div className="title">
            <h1>HOW GCC WORKS</h1>
         </div>
         <div className="worksCard">
            <Card
               src="/images/SignUp.svg"
               title="SIGN UP"
               description="Create an account, choose your game, invite friends to join your
            team, and join the game tournaments"
            />
            <Card
               src="/images/SignUp.svg"
               title="CONTEST"
               description="Join the game with the terms and condition of the tournament
               host and compete against pros to become the champion of the
               game"
            />
            <Card
               src="/images/SignUp.svg"
               title="PRIZES"
               description="Get your prizes by winning the game against pros from the
               tournament"
            />
         </div>
         <div className="learnMore">
            <a href="/help">Learn More About GCC ...</a>
         </div>
      </div>
   );
};

export default works;
