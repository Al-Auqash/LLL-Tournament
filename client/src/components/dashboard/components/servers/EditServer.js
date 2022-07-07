import React, { Component } from "react";
import axios from "axios";
import "./EditServer.css";
import { withRouter } from "react-router-dom";

// export default class editServer extends Component {
class EditServer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         // _id : "",
         gameServer: "",
         gaemServerAlias: "",
      };

      this.editServer = this.editServer.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   componentDidMount() {
      axios
         // .get("http://localhost:5000/gameServer/api/" + this.state._id)
         // .get("http://localhost:5000/gameServer/api/${this.props.match.params.id}")
         .get(
            "http://localhost:5000/gameServer/api/" + this.props.match.params.id
         )
         .then((response) => {
            this.setState({
               // currentgameServer: response.data,
               gameServer: response.data.gameServer,
               gameServerAlias: response.data.gameServerAlias,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   editServer(event) {
      event.preventDefault();
      // const id = this.props.params;
      const newgameServer = {
         gameServer: this.state.gameServer,
         gameServerAlias: this.state.gameServerAlias,
      };
      axios
         .put(
            "http://localhost:5000/gameServer/api/" +
               this.props.match.params.id,
            newgameServer
         )
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/gameServer";
            // alert("gameServer created!");
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
            <form onSubmit={this.editServer}>
               <div className="editServerInputGroup">
                  <label>Game Server Name</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="gameServer"
                     value={this.state.gameServer}
                     onChange={this.handleFieldChange}
                     className="serverEditInput"
                  />
               </div>
               <div className="editServerInputGroup">
                  <label>Game Server Alias</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="gameServerAlias"
                     value={this.state.gameServerAlias}
                     onChange={this.handleFieldChange}
                     className="serverEditInput"
                  />
               </div>
               <button
                  className="editServerButton"
                  type="submit"
                  name="editServer"
               >
                  Edit
               </button>
            </form>
         </div>
      );
   }
}

export default withRouter(EditServer);
