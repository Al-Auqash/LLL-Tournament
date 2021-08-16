import React, { Component } from "react";
import "./createTournament.css";
import axios from "axios";

export default class createTournament extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      status: "",
      prize: "",
      game: "",
      region: "",
    };

    this.createTournament = this.createTournament.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createTournament(event) {
    event.preventDefault();

    const tournament = {
      name: this.state.name,
      status: this.state.status,
      prize: this.state.prize,
      game: this.state.game,
      region: this.state.region,
    };
    axios
      .post("http://localhost:5000/tournament/api/create/", {
        name: this.state.name,
        status: this.state.status,
        prize: this.state.prize,
        game: this.state.game,
        region: this.state.region,
      })
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/tournament";
        alert("tournament created!");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      name: "",
      status: "",
      prize: "",
      game: "",
      region: "",
    });
  }

  render() {
    return (
      <div>
        <h1 className="titleContent">Create Tournament</h1>
        <form onSubmit={this.createTournament} method="post">
          <div className="createTournamentInputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleFieldChange}
              className="tournamentCreateInput"
            />
          </div>
          <div className="createTournamentInputGroup">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={this.state.status}
              onChange={this.handleFieldChange}
              className="tournamentCreateInput"
            />
          </div>
          <div className="createTournamentInputGroup">
            <label>Prize</label>
            <input
              type="text"
              name="prize"
              value={this.state.prize}
              onChange={this.handleFieldChange}
              className="tournamentCreateInput"
            />
          </div>
          <div className="createTournamentInputGroup">
            <label>Game</label>
            <input
              type="text"
              name="game"
              value={this.state.game}
              onChange={this.handleFieldChange}
              className="tournamentCreateInput"
            />
          </div>
          <div className="createTournamentInputGroup">
            <label>Region</label>
            <input
              type="text"
              name="region"
              value={this.state.region}
              onChange={this.handleFieldChange}
              className="tournamentCreateInput"
            />
          </div>
          <button className="createTournamentButton" type="submit" name="createTournament">
              Create
            </button>
        </form>
      </div>
    );
  }
}
