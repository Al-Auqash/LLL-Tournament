import React, { Component } from "react";
import axios from "axios";
import "./editGame.css";
import { withRouter } from "react-router-dom";

// export default class editGame extends Component {
class editGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      genre: "",
      developer: "",
      publisher: "",
    };

    this.editGame = this.editGame.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    axios
      // .get("http://localhost:5000/game/api/" + this.state._id)
      // .get("http://localhost:5000/game/api/${this.props.match.params.id}")
      .get("http://localhost:5000/game/api/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          // currentgameServer: response.data,
          gameName: response.data.gameName,
          genre: response.data.genre,
          developer: response.data.developer,
          publisher: response.data.publisher,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editGame(event) {
    event.preventDefault();
    // const id = this.props.params;
    const newgameServer = {
      gameName: this.state.gameName,
      genre: this.state.genre,
      developer: this.state.developer,
      publisher: this.state.publisher,
    };
    axios
      .put(
        "http://localhost:5000/game/api/" + this.props.match.params.id,
        newgameServer
      )
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/game";
        // alert("game created!");
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
    // const { currentgameServer } = this.state;
    return (
      <div>
        <h1 className="titleContent">Edit Game Server</h1>
        <form onSubmit={this.editGame}>
          <div className="createGameInputGroup">
            <label>Game Name</label>
            <input
              type="text"
              name="gameName"
              value={this.state.gameName}
              onChange={this.handleFieldChange}
              className="gameCreateInput"
            />
          </div>
          <div className="createGameInputGroup">
            <label>Game genre</label>
            <input
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.handleFieldChange}
              className="gameCreateInput"
            />
          </div>
          <div className="createGameInputGroup">
            <label>Game Developer</label>
            <input
              type="text"
              name="developer"
              value={this.state.developer}
              onChange={this.handleFieldChange}
              className="gameCreateInput"
            />
          </div>
          <div className="createGameInputGroup">
            <label>Game Publisher</label>
            <input
              type="text"
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleFieldChange}
              className="gameCreateInput"
            />
          </div>
          <button className="editGameButton" type="submit" name="editGame">
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(editGame);
