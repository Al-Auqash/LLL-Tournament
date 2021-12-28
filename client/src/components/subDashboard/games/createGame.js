import React, { Component } from "react";
import "./createGame.css";
import axios from "axios";

class createGame extends Component {
   constructor() {
      super();

      this.state = {
         gameName: "",
         genre: "",
         developer: "",
         publisher: "",
      };

      this.createGame = this.createGame.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   handleFieldChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   createGame(event) {
      event.preventDefault();

      // const server = {
      //   gameName: this.state.gameName,
      //   genre: this.state.genre,
      //   developer: this.state.developer,
      //   publisher: this.state.publisher,
      // };

      axios
         .post("http://localhost:5000/game/api/create/", {
            gameName: this.state.gameName,
            genre: this.state.genre,
            developer: this.state.developer,
            publisher: this.state.publisher,
         })
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/game";
            // alert("server created!");
         })
         .catch((error) => {
            console.log(error);
         });

      this.setState({
         gameName: "",
         genre: "",
         developer: "",
         publisher: "",
      });
   }

   render() {
      return (
         <div>
            <h1 className="titleContent">Create Game</h1>
            <form onSubmit={this.createGame} method="post">
               <div className="createGameInputGroup">
                  <label>Game Name</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="gameName"
                     value={this.state.gameName}
                     onChange={this.handleFieldChange}
                     className="gameCreateInput"
                  />
               </div>
               <div className="createGameInputGroup">
                  <label>Game genre</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="genre"
                     value={this.state.genre}
                     onChange={this.handleFieldChange}
                     className="gameCreateInput"
                  />
               </div>
               <div className="createGameInputGroup">
                  <label>Game Developer</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="developer"
                     value={this.state.developer}
                     onChange={this.handleFieldChange}
                     className="gameCreateInput"
                  />
               </div>
               <div className="createGameInputGroup">
                  <label>Game Publisher</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="publisher"
                     value={this.state.publisher}
                     onChange={this.handleFieldChange}
                     className="gameCreateInput"
                  />
               </div>
               <button
                  className="createGameButton"
                  type="submit"
                  name="createGame"
               >
                  Create
               </button>
            </form>
         </div>
      );
   }
}

export default createGame;
