import React from "react";
import WelcomePage from "./subMainContent/welcomePage";
import Works from "./subMainContent/works";
import OurPartners from "./subMainContent/ourPartners";

import "./mainContent.css";

const mainContent = () => {
  return (
    <section id="mainContent">
      <WelcomePage />
      <Works  />
      <OurPartners />
    </section>
  );
};

export default mainContent;
