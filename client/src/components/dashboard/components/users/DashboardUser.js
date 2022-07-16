import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";
import Table from "../Table";

class DashboardUser extends Component {
   constructor() {
      super();
      this.state = {
         Users: [],
      };
   }

   deleteServer(id) {
      axios
         .delete("http://localhost:5000/user/api/" + id)
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/user";
         })
         .catch((error) => {
            console.log(error);
         });
   }

   componentDidMount() {
      axios
         .get("http://localhost:5000/user/api/all")
         .then((response) => {
            this.setState({
               Users: response.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   render() {
      const { Users } = this.state;
      return (
         <div>
            <h1 className="titleContent">Users</h1>
            <div className="buttonMargin">
               <Link to="/dashboard/user/create" className="createButton">
                  Create +
               </Link>
            </div>
            {/* <table className="dashboardTable">
               <tr>
                  <th>Role</th>
                  <th>Username</th>
                  <th>User Email</th>
                  <th>User Password</th>
                  <th>Action</th>
               </tr>
               {Users.map((Users) => (
                  <tr>
                     <td>{Users.role}</td>
                     <td>{Users.username}</td>
                     <td>{Users.email}</td>
                     <td>{Users.password}</td>
                     <td>
                        <div className="actionContainer">
                           <Link
                              to={"/dashboard/user/edit/" + Users._id}
                              className="editButton"
                           >
                              Edit
                           </Link>

                           <button
                              type="submit"
                              class="deleteButton"
                              onClick={this.deleteServer.bind(this, Users._id)}
                           >
                              Delete
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </table> */}
            <Table />
         </div>
      );
   }
}

export default DashboardUser;
