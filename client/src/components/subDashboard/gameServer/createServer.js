import React, { Component } from "react";
import "./createServer.css";
import axios from "axios";

class createServer extends Component {
   constructor() {
      super();

      this.state = {
         gameServer: "",
         gameServerAlias: "",
      };

      this.createServer = this.createServer.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   handleFieldChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   createServer(event) {
      event.preventDefault();

      const server = {
         gameServer: this.state.gameServer,
         gameServerAlias: this.state.gameServerAlias,
      };
      axios
         .post("http://localhost:5000/gameServer/api/create/", {
            gameServer: this.state.gameServer,
            gameServerAlias: this.state.gameServerAlias,
         })
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/gameServer";
            // alert("server created!");
         })
         .catch((error) => {
            console.log(error);
         });

      this.setState({
         gameServer: "",
         gameServerAlias: "",
      });
   }

   render() {
      return (
         <div>
            <h1 className="titleContent">Create Server</h1>
            <form onSubmit={this.createServer} method="post">
               <div className="createServerInputGroup">
                  <label>Game Server Name</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="gameServer"
                     value={this.state.gameServer}
                     onChange={this.handleFieldChange}
                     className="serverCreateInput"
                  />
               </div>
               <div className="createServerInputGroup">
                  <label>Game Server Alias</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="gameServerAlias"
                     value={this.state.gameServerAlias}
                     onChange={this.handleFieldChange}
                     className="serverCreateInput"
                  />
               </div>
               <button
                  className="createServerButton"
                  type="submit"
                  name="createServer"
               >
                  Create
               </button>
            </form>
         </div>
      );
   }
}

export default createServer;
