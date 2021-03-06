import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DashboardTournament.css";

export default class dashboardTournament extends Component {
  constructor() {
    super();
    this.state = {
      Tournaments: [],
    };
  }

  deleteTournament(id) {
    axios
      .delete("http://localhost:5000/tournament/api/" + id)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/tournament";
      })
      .catch((error) => {
        console.log(error);
      });
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
            {/* <th>ID</th> */}
            <th width="20%">Name</th>
            <th width="10%">Status</th>
            <th width="20%">Prize</th>
            <th width="20%">Game</th>
            <th width="20%">Region</th>
            <th width="10%">Action</th>
          </tr>
          {Tournaments.map((Tournaments) => (
            <tr>
              {/* <td>{Tournaments._id}</td> */}
              <td>{Tournaments.name}</td>
              <td>{Tournaments.status}</td>
              <td>{Tournaments.prize}</td>
              <td>{Tournaments.game}</td>
              <td>{Tournaments.region}</td>
              <td>
                <div className="actionContainer">
                  <Link
                    // to={{
                    //   pathname: `/dashboard/tournament/edit/`,
                    //   state: { Tournaments: Tournaments },
                    // }}
                    to={"/dashboard/tournament/edit/"+Tournaments._id}
                    className="editButton"
                  >
                    Edit
                  </Link>

                  <button
                    type="submit"
                    class="deleteButton"
                    onClick={this.deleteTournament.bind(this, Tournaments._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
