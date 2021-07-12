import axios from "axios";
import React, { Component } from "react";

export default class dashboardContent extends Component {
  constructor() {
    super();
    this.state = {
      Tournaments: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/tournament/api")
      .then((response) => {
        this.setState({
          Tournaments: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { Tournaments } = this.state;
    return (
      <div className="dashboardContent">
        <div className="container">
          <a>Create Tournament</a>
          <table>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Prize</th>
              <th>Game</th>
              <th>Region</th>
            </tr>
            {Tournaments.map((Tournaments) => (
              <tr>
                <td>{Tournaments.name}</td>
                <td>{Tournaments.status}</td>
                <td>{Tournaments.prize}</td>
                <td>{Tournaments.game}</td>
                <td>{Tournaments.region}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
