import React from "react";
import DashboardTournament from "./dashboardTournament";
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
            </Switch>
          </Router>
        </div>
      </div>
    );
}

export default dashboardContent;
