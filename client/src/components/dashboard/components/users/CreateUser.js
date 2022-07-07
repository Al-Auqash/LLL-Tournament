import React, { Component } from "react";
import "./CreateUser.css";
import axios from "axios";

class createUser extends Component {
   constructor() {
      super();

      this.state = {
         role: "",
         username: "",
         email: "",
         password: "",
      };

      this.createUser = this.createUser.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   handleFieldChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   createUser(event) {
      event.preventDefault();

      // const server = {
      //   role: this.state.role,
      //   username: this.state.username,
      //   email: this.state.email,
      //   password: this.state.password,
      // };

      axios
         .post("http://localhost:5000/user/api/create/", {
            role: this.state.role,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
         })
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/user";
            // alert("server created!");
         })
         .catch((error) => {
            console.log(error);
            window.location.href = "/dashboard/user";
         });

      this.setState({
         role: "",
         username: "",
         email: "",
         password: "",
      });
   }

   render() {
      return (
         <div>
            <h1 className="titleContent">Create User</h1>
            <form onSubmit={this.createUser} method="post">
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
                  <label>User Pasword</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleFieldChange}
                     className="userCreateInput"
                  />
               </div>
               <button
                  className="createUserButton"
                  type="submit"
                  name="createUser"
               >
                  Create
               </button>
            </form>
         </div>
      );
   }
}

export default createUser;
