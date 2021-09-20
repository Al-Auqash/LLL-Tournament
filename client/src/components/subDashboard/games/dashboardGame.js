import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

class DashboardGame extends Component {
  constructor() {
    super();
    this.state = {
      Games: [],
    };
  }

  deleteServer(id) {
    axios
      .delete("http://localhost:5000/game/api/" + id)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/game";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/game/api/all")
      .then((response) => {
        this.setState({
          Games: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { Games } = this.state;
    return (
      <div>
        <h1 className="titleContent">Games</h1>
        <div className="buttonMargin">
          <Link to="/dashboard/game/create" className="createButton">
            Create +
          </Link>
        </div>
        <table className="dashboardTable">
          <tr>
            <th>ID</th>
            <th>Game</th>
            <th>Game Genre</th>
            <th>Game Developer</th>
            <th>Game Publisher</th>
            <th>Action</th>
          </tr>
          {Games.map((Games) => (
            <tr>
              <td>{Games._id}</td>
              <td>{Games.gameName}</td>
              <td>{Games.genre}</td>
              <td>{Games.developer}</td>
              <td>{Games.publisher}</td>
              <td>
                <div className="actionContainer">
                  <Link
                    // to={{
                    //   pathname: `/dashboard/game/edit/`,
                    //   state: { Games: Games },
                    // }}
                    to={"/dashboard/game/edit/" + Games._id}
                    className="editButton"
                  >
                    Edit
                  </Link>

                  <button
                    type="submit"
                    class="deleteButton"
                    onClick={this.deleteServer.bind(this, Games._id)}
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

export default DashboardGame;
