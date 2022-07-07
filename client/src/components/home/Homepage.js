import React from "react";
import WelcomePage from "./components/WelcomePage";
import Works from "./components/Works";
import OurPartners from "./components/OurPartners";

import "./Homepage.css";

const Homepage = () => {
  return (
    <section id="mainContent">
      <WelcomePage />
      <Works  />
      <OurPartners />
    </section>
  );
};

export default Homepage;
