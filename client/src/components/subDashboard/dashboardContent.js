import React from "react";
import DashboardTournament from "./dashboardTournament";
import CreateTournament from "./createTournament";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  "./dashboardContent.css";

const dashboardContent = () => {
    return (
      <div className="dashboardContent">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/dashboard/tournament">
                <DashboardTournament />
              </Route>
              <Route exact path="/dashboard/tournament/create">
                <CreateTournament />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
}

export default dashboardContent;
