import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

class DashboardGameServer extends Component {
  constructor() {
    super();
    this.state = {
      Server: [],
    };
  }

  deleteServer(id) {
    axios
      .delete("http://localhost:5000/gameServer/api/" + id)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard/gameServer";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/gameServer/api/all")
      .then((response) => {
        this.setState({
          Server: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { Server } = this.state;
    return (
      <div>
        <h1 className="titleContent">Server</h1>
        <div className="buttonMargin">
          <Link to="/dashboard/gameServer/create" className="createButton">
            Create +
          </Link>
        </div>
        <table className="dashboardTable">
          <tr>
            <th>ID</th>
            <th>Game Server</th>
            <th>Game Server Alias</th>
            <th>Action</th>
          </tr>
          {Server.map((Server) => (
            <tr>
              <td>{Server._id}</td>
              <td>{Server.gameServer}</td>
              <td>{Server.gameServerAlias}</td>
              <td>
                <div className="actionContainer">
                  <Link
                    // to={{
                    //   pathname: `/dashboard/gameServer/edit/`,
                    //   state: { Server: Server },
                    // }}
                    to={"/dashboard/gameServer/edit/" + Server._id}
                    className="editButton"
                  >
                    Edit
                  </Link>

                  <button
                    type="submit"
                    class="deleteButton"
                    onClick={this.deleteServer.bind(this, Server._id)}
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

export default DashboardGameServer;
