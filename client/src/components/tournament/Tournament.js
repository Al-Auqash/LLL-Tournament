import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./Tournament.css";

class Tournament extends Component {
// const Tournament = () => {
  constructor() {
      super();

      this.state = {
          Tournaments: [],
          TournamentsFinished: [],
      };
  }

  componentDidMount() {
      axios
          .get("http://localhost:5000/tournament/api")
          .then((response) => {
              this.setState({
                  Tournaments: response.data,
              });
              console.log(this.state.Tournaments)
          })
          .catch((error) => {
              console.log(error);
          });

      axios
          .get("http://localhost:5000/tournament/api/finished")
          .then((response) => {
              this.setState({
                  TournamentsFinished: response.data,
              });
          })
          .catch((error) => {
              console.log(error);
          });
  }

  // const [tourney, setTourney] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`http://localhost:5000/tournament/api`);
  //     const body = await result.json();
  //     console.log(body);
  //     setTourney(body);
  //   };
  //   fetchData();
  // }, []);

  render() {
    const { Tournaments } = this.state;
    const { TournamentsFinished } = this.state;
  return (
    <div id="tournament">
      <div className="tournamentLeftContent">
        <div className="subLeftContent">
          <div className="gameMenu">
            <img className="imgGameMenu" src="/images/apex-logo.png"></img>
            {/* <img className="imgGameMenu" src={valorant}></img> */}
          </div>
          <div className="mainContent">
            <div className="contentMenu">
              <NavLink exact to="/tournament" activeStyle={{textDecoration: 'underline'}}>ACTIVE TOURNAMENT</NavLink>
              <a>|</a>
              <NavLink exact to="/tournament/finished" activeStyle={{textDecoration: 'underline'}}>FINISHED TOURNAMENT</NavLink>
            </div>
            <Router>
              <Switch>
                <Route exact path="/tournament">
                  <div className="tournamentTable">
                    {Tournaments.map((Tournaments) => (
                      <Link
                        className="tournamentTableContent"
                        to="/help"
                        key={Tournaments.id}
                      >
                        <h3>{Tournaments.name.toUpperCase()}</h3>
                        <h3>{Tournaments.status}</h3>
                        <h3>{Tournaments.prize}</h3>
                      </Link>
                    ))}
                  </div>
                </Route>
                <Route exact path="/tournament/finished">
                  <div className="tournamentTable">
                    {TournamentsFinished.map((Tournaments) => (
                      <Link
                        className="tournamentTableContent"
                        to="/help"
                        key={Tournaments.id}
                      >
                        <h3>{Tournaments.name.toUpperCase()}</h3>
                        <h3>{Tournaments.status}</h3>
                        <h3>{Tournaments.prize}</h3>
                      </Link>
                    ))}
                  </div>
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
      <div className="tournamentRightContent">
        <h1>
          ARE YOU BRAVE ENOUGH TO SHOW THE WORLD WHO IS THE CHAMPION? SIGN UP
          NOW!
        </h1>
        <Link to="/signUp">
          <button className="joinNow">
            <p className="btnText">Join Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
}

export default Tournament;
