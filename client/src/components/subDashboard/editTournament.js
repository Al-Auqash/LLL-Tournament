import React, { Component } from "react";
import axios from "axios";
import "./editTournament.css";
import { withRouter } from "react-router-dom";

// export default class editTournament extends Component {
class editTournament extends Component {
  constructor(props) {
    super(props);
    // const { _id, name, status, prize, game, region } =
    //   props.location.state.Tournaments;
    this.state = {
      // _id : "",
      name: "",
      status: "",
      prize: "",
      game: "",
      region: "",
    };
    // this.state = {
    //   currentTournament: [],
    // };

    this.editTournament = this.editTournament.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    axios
      // .get("http://localhost:5000/tournament/api/" + this.state._id)
      // .get("http://localhost:5000/tournament/api/${this.props.match.params.id}")
      .get("http://localhost:5000/tournament/api/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          // currentTournament: response.data,
          name: response.data.name,
          status: response.data.status,
          prize: response.data.prize,
          game: response.data.game,
          region: response.data.region,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editTournament(event) {
    event.preventDefault();
    // const id = this.props.params;
    const newTournament = {
      name: this.state.name,
      status: this.state.status,
      prize: this.state.prize,
      game: this.state.game,
      region: this.state.region,
    };
    axios
      .put(
        "http://localhost:5000/tournament/api/" + this.props.match.params.id,
        newTournament
      )
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/tournament";
        // alert("tournament created!");
      })
      .catch((error) => {
        console.log(error);
      });

    // this.setState({
    //   name: "",
    //   status: "",
    //   prize: "",
    //   game: "",
    //   region: "",
    // });
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // var newState = {};
    // newState[e.target.name] = e.target.value;
    // this.setState(newState);
  }

  render() {
    // const { currentTournament } = this.state;
    return (
      <div>
        <h1 className="titleContent">Edit Tournament</h1>
        <form onSubmit={this.editTournament}>
          <div className="editTournamentInputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={this.state.status}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Prize</label>
            <input
              type="text"
              name="prize"
              value={this.state.prize}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Game</label>
            <input
              type="text"
              name="game"
              value={this.state.game}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Region</label>
            <input
              type="text"
              name="region"
              value={this.state.region}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <button
            className="editTournamentButton"
            type="submit"
            name="editTournament"
          >
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(editTournament);
