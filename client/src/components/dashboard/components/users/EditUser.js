import React, { Component } from "react";
import axios from "axios";
import "./EditUser.css";
import { withRouter } from "react-router-dom";

// export default class editUser extends Component {
class editUser extends Component {
   constructor(props) {
      super(props);
      this.state = {
         role: "",
         username: "",
         email: "",
         password: "",
      };

      this.editUser = this.editUser.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   componentDidMount() {
      axios
         // .get("http://localhost:5000/user/api/" + this.state._id)
         // .get("http://localhost:5000/user/api/${this.props.match.params.id}")
         .get("http://localhost:5000/user/api/" + this.props.match.params.id)
         .then((response) => {
            this.setState({
               // currentuserServer: response.data,
               role: response.data.role,
               username: response.data.username,
               email: response.data.email,
               password: response.data.password,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   editUser(event) {
      event.preventDefault();
      // const id = this.props.params;
      const newUserServer = {
         role: this.state.role,
         username: this.state.username,
         email: this.state.email,
         password: this.state.password,
      };
      axios
         .put(
            "http://localhost:5000/user/api/" + this.props.match.params.id,
            newUserServer
         )
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/user";
            // alert("user created!");
         })
         .catch((error) => {
            console.log(error);
         });

      // this.setState({
      //   name: "",
      //   status: "",
      //   prize: "",
      //   user: "",
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
      // const { currentuserServer } = this.state;
      return (
         <div>
            <h1 className="titleContent">Edit User</h1>
            <form onSubmit={this.editUser}>
               <div className="createUserInputGroup">
                  <label>User Role</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="role"
                     value={this.state.role}
                     onChange={this.handleFieldChange}
                     className="userCreateInput"
                  />
               </div>
               <div className="createUserInputGroup">
                  <label>Username</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="username"
                     value={this.state.username}
                     onChange={this.handleFieldChange}
                     className="userCreateInput"
                  />
               </div>
               <div className="createUserInputGroup">
                  <label>User Email</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="email"
                     value={this.state.email}
                     onChange={this.handleFieldChange}
                     className="userCreateInput"
                  />
               </div>
               <div className="createUserInputGroup">
                  <label>User Password</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleFieldChange}
                     className="userCreateInput"
                  />
               </div>
               <button className="editUserButton" type="submit" name="editUser">
                  Edit
               </button>
            </form>
         </div>
      );
   }
}

export default withRouter(editUser);
