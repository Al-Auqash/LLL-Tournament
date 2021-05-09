import React from "react";
import Nav from "./components/navBar";
import MainContent from "./components/mainContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appPosition">
        <Nav />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
