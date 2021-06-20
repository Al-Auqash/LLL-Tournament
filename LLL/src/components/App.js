import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
// import IndexComponents from "./components/indexComponents";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/navBar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import ForgotPassword from "./components/forgotPassword";
import Tournament from "./components/tournament";
import Guide from "./components/guide";
import Help from "./components/help";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="appPosition">
                    <Router>
                        <Switch>
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
                                <Nav />
                                <Route exact path="/">
                                    <MainContent />
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
                        <Switch></Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
