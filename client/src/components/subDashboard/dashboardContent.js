import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashboardTournament from "./dashboardTournament";
import CreateTournament from "./createTournament";
import EditTournament from "./editTournament";
import "./dashboardContent.css";
import DashboardGameServer from "./gameServer/dashboardGameServer";
import CreateServer from "./gameServer/createServer";
import EditServer from "./gameServer/editServer";
import DashboardGame from "./games/dashboardGame";
import CreateGame from "./games/createGame";
import EditGame from "./games/editGame";
import DashboardUser from "./users/dashboardUser";
import CreateUser from "./users/createUser";
import EditUser from "./users/editUser";

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
            <Route exact path="/dashboard/game">
              <DashboardGame />
            </Route>
            <Route exact path="/dashboard/game/create">
              <CreateGame />
            </Route>
            <Route exact path="/dashboard/game/edit/:id">
              <EditGame />
            </Route>
            <Route exact path="/dashboard/user">
              <DashboardUser />
            </Route>
            <Route exact path="/dashboard/user/create">
              <CreateUser />
            </Route>
            <Route exact path="/dashboard/user/edit/:id">
              <EditUser />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default dashboardContent;
