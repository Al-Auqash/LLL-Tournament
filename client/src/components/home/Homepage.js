import React from "react";
import WelcomePage from "./components/WelcomePage";
import Works from "./components/Works";
import OurPartners from "./components/OurPartners";

import "./Homepage.css";
import News from "./components/News";

const Homepage = () => {
    return (
        <section id="mainContent">
            <WelcomePage/>
            <div className="background-news-work">
                <News/>
                <Works/>
            </div>
            <OurPartners/>
        </section>
    );
};

export default Homepage;
