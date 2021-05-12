import React from "react";
import Nav from "./components/navBar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appPosition">
        <Nav />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
