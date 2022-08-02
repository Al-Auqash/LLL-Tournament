import React from "react";
import "../Homepage.css";

const OurPartners = () => {
  return (
    <div className="ourPartners col">
      <div className="title row">
        <h1>OUR PARTNERS</h1>
      </div>
      <div className="ourPartnersCard grid-wrapper">
          <div className="cs-logo-card">
            <p>Apex</p>
          </div>
          <div className="cs-logo-card">
            <p>Valorant</p>
          </div>
          <div className="cs-logo-card">
            <p>Dota 2</p>
          </div>
          <div className="cs-logo-card">
            <p>PUBG</p>
          </div>
          <div className="cs-logo-card">
            <p>Rainbow Six Siege</p>
          </div>
          <div className="cs-logo-card">
            <p>League of Legends</p>
          </div>
      </div>
    </div>
  );
};
export default OurPartners;
