import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboardTournament.css";

export default class dashboardTournament extends Component {
  constructor() {
    super();
    this.state = {
      Tournaments: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/tournament/api/all")
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
      <div>
        <h1 className="titleContent">Tournaments</h1>
        <div className="buttonMargin">
          <Link to="/dashboard/tournament/create" className="createButton">
            Create +
          </Link>
        </div>
        <table className="dashboardTable">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Prize</th>
            <th>Game</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
          {Tournaments.map((Tournaments) => (
            <tr>
              <td>{Tournaments.name}</td>
              <td>{Tournaments.status}</td>
              <td>{Tournaments.prize}</td>
              <td>{Tournaments.game}</td>
              <td>{Tournaments.region}</td>
              <td>
                <div className="actionContainer">
                  <Link to="/dashboard/tournament/edit" className="editButton">
                    Edit
                  </Link>
                  <form action="/dashboard/tournament/delete" method="post">
                    <button class="deleteButton">Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
