import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./navBar";
import MainContent from "./mainContent";
import Footer from "./footer";

const indexComponents = () => {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
};

export default indexComponents;
