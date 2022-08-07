import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./DashboardContent.css";

import DashboardTournament from "./tournament/DashboardTournament";
import CreateTournament from "./tournament/CreateTournament";
import EditTournament from "./tournament/EditTournament";

import DashboardGameServer from "./servers/DashboardGameServer";
import CreateServer from "./servers/CreateServer";
import EditServer from "./servers/EditServer";

import DashboardGame from "./games/DashboardGame";
import CreateGame from "./games/CreateGame";
import EditGame from "./games/EditGame";

import DashboardUser from "./users/DashboardUser";
import CreateUser from "./users/CreateUser";
import EditUser from "./users/EditUser";

import DashboardNews from "./news/DashboardNews";
import CreateNews from "./news/CreateNews";
import EditNews from "./news/EditNews";

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

            <Route exact path="/dashboard/news">
              <DashboardNews />
            </Route>
            <Route exact path="/dashboard/news/create">
              <CreateNews />
            </Route>
            <Route exact path="/dashboard/news/edit/:id">
              <EditNews />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default dashboardContent;
