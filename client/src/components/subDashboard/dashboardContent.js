import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashboardTournament from "./dashboardTournament";
import CreateTournament from "./createTournament";
import EditTournament from "./editTournament";
import "./dashboardContent.css";
import DashboardGameServer from "./gameServer/dashboardGameServer";
import CreateServer from "./gameServer/createServer";
import EditServer from "./gameServer/editServer";

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
            <Route path="/dashboard/tournament/edit/:id">
              <EditTournament />
            </Route>
            {/* <Route
              path="/dashboard/tournament/edit/id"
              render={(props) => (
                <EditTournament
                  {...props}
                />
              )}
            /> */}
            <Route exact path="/dashboard/gameServer">
              <DashboardGameServer />
            </Route>
            <Route exact path="/dashboard/gameServer/create">
              <CreateServer />
            </Route>
            <Route exact path="/dashboard/gameServer/edit/:id">
              <EditServer />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default dashboardContent;
