import React from "react";
import WelcomePage from "./subMainContent/welcomePage";
import Works from "./subMainContent/works";
import "./mainContent.css";

const mainContent = () => {
  return (
    <section id="mainContent">
      <WelcomePage />
      <Works  />
    </section>
  );
};

export default mainContent;
