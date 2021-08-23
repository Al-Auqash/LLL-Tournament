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
    // this.state = {
    //   _id,
    //   name,
    //   status,
    //   prize,
    //   game,
    //   region,
    // };
    this.state = {
      currentTournament: [],
    };

    this.editTournament = this.editTournament.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      // .get("http://localhost:5000/tournament/api/" + this.state._id)
      // .get("http://localhost:5000/tournament/api/${this.props.match.params.id}")
      .get("http://localhost:5000/tournament/api/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          currentTournament: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editTournament(event) {
    event.preventDefault();
    // const id = this.props.params;
    axios
      .put("http://localhost:5000/tournament/api/" + this.state._id, {
        name: this.state.name,
        status: this.state.status,
        prize: this.state.prize,
        game: this.state.game,
        region: this.state.region,
      })
      .then((response) => {
        console.log(response);
        // window.location.href = "/dashboard/tournament";
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

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { currentTournament } = this.state;
    return (
      <div>
        <h1 className="titleContent">Edit Tournament</h1>
        <form onSubmit={this.editTournament}>
          <div className="editTournamentInputGroup">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={currentTournament.name}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={currentTournament.status}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Prize</label>
            <input
              type="text"
              name="prize"
              value={currentTournament.prize}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Game</label>
            <input
              type="text"
              name="game"
              value={currentTournament.game}
              onChange={this.handleFieldChange}
              className="tournamentEditInput"
            />
          </div>
          <div className="editTournamentInputGroup">
            <label>Region</label>
            <input
              type="text"
              name="region"
              value={currentTournament.region}
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
