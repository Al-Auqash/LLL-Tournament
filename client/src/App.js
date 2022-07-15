import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/authentication/signIn";
import SignUp from "./components/authentication/signUp";
// import IndexComponents from "./components/indexComponents";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home/Homepage";
import Footer from "./components/footer";
import ForgotPassword from "./components/authentication/forgotPassword";
import Tournament from "./components/tournament/Tournament";
import Guide from "./components/guide/guide";
import Help from "./components/help";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import IsAdmin from "./components/authentication/IsAdmin";

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="appPosition">
               <Router>
                  <Switch>
                     <Route path="/dashboard">
                        {IsAdmin() ? <Dashboard /> : <Redirect to="/" />}
                     </Route>

                     <Route exact path="/signIn">
                        <SignIn />
                     </Route>
                     <Route exact path="/signUp">
                        <SignUp />
                     </Route>
                     <Route exact path="/forgotPassword">
                        <ForgotPassword />
                     </Route>
                     <>
                        <Navbar />
                        <Route exact path="/">
                           <Homepage />
                        </Route>
                        <Route exact path="/tournament">
                           <Tournament />
                        </Route>
                        <Route exact path="/tournament/finished">
                           <Tournament />
                        </Route>
                        <Route exact path="/help">
                           <Help />
                        </Route>
                        <Route exact path="/guide">
                           <Guide />
                        </Route>
                        <Footer />
                     </>
                  </Switch>
               </Router>
            </div>
         </div>
      );
   }
}

export default App;

if (document.getElementById("root")) {
   ReactDOM.render(<App />, document.getElementById("root"));
}
