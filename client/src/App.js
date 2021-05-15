import React from "react";
import SignIn from "./components/signIn";
import IndexComponents from "./components/indexComponents";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appPosition">
        <Router>
          <Switch>
            <Route exact path="/" component={IndexComponents}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
