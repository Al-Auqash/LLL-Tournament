import React from "react";
import SignIn from "./components/signIn";
// import IndexComponents from "./components/indexComponents";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/navBar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import ForgotPassword from "./components/forgotPassword";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appPosition">
        <Router>
          <Switch>
            <Route exact path="/">
              <Nav />
              <MainContent />
              <Footer />
            </Route>
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
