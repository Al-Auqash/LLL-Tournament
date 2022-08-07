import React, { Component } from "react";
import "./CreateTournament.css";
import axios from "axios";

export default class createNews extends Component {
   constructor() {
      super();

      this.state = {
         name: "",
         status: "",
         prize: "",
         game: "",
         region: "",
         regionOption: [],
         gameOption: [],
      };

      this.createTournament = this.createTournament.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
   }

   handleFieldChange(event) {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   createNews(event) {
      event.preventDefault();

      const tournament = {
         name: this.state.name,
         status: this.state.status,
         prize: this.state.prize,
         game: this.state.game,
         region: this.state.region,
      };
      axios
         .post("http://localhost:5000/tournament/api/create/", {
            name: this.state.name,
            status: this.state.status,
            prize: this.state.prize,
            game: this.state.game,
            region: this.state.region,
         })
         .then((response) => {
            console.log(response);
            window.location.href = "/dashboard/tournament";
            // alert("tournament created!");
         })
         .catch((error) => {
            console.log(error);
         });

      this.setState({
         name: "",
         status: "",
         prize: "",
         game: "",
         region: "",
      });
   }

   componentDidMount() {
      axios
         .get("http://localhost:5000/gameServer/api/all/")
         .then((response) => {
            this.setState({
               regionOption: response.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });

      axios
         .get("http://localhost:5000/game/api/all/")
         .then((response) => {
            this.setState({
               gameOption: response.data,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   render() {
      const { regionOption } = this.state;
      const { gameOption } = this.state;
      return (
         <div>
            <h1 className="titleContent">Create Tournament</h1>
            <form onSubmit={this.createTournament} method="post">
               <div className="createTournamentInputGroup">
                  <label>Name</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleFieldChange}
                     className="tournamentCreateInput"
                  />
               </div>
               <div className="createTournamentInputGroup">
                  <label>Status</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="status"
                     value={this.state.status}
                     onChange={this.handleFieldChange}
                     className="tournamentCreateInput"
                  />
               </div>
               <div className="createTournamentInputGroup">
                  <label>Prize</label>
                  <input
                     autoComplete="off"
                     type="text"
                     name="prize"
                     value={this.state.prize}
                     onChange={this.handleFieldChange}
                     className="tournamentCreateInput"
                  />
               </div>
               <div className="createTournamentInputGroup">
                  <label>Game</label>
                  {/* <input
                     autoComplete="off"
                     type="text"
                     name="game"
                     value={this.state.game}
                     onChange={this.handleFieldChange}
                     className="tournamentCreateInput"
                  /> */}

                  <select
                     className="tournamentCreateInput"
                     name="region"
                     onChange={this.handleFieldChange}
                  >
                     <option></option>
                     {gameOption.map((gameOption) => (
                        <option value={gameOption._id}>
                           {gameOption.gameName}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="createTournamentInputGroup">
                  <label>Region</label>
                  {/* <input
                     autoComplete="off"
                     type="text"
                     name="region"
                     value={this.state.region}
                     onChange={this.handleFieldChange}
                     className="tournamentCreateInput"
                  /> */}

                  <select
                     className="tournamentCreateInput"
                     name="region"
                     onChange={this.handleFieldChange}
                  >
                     <option></option>
                     {regionOption.map((regionOption) => (
                        <option value={regionOption._id}>
                           {regionOption.gameServer}
                        </option>
                     ))}
                  </select>
               </div>
               <button
                  className="createTournamentButton"
                  type="submit"
                  name="createTournament"
               >
                  Create
               </button>
            </form>
         </div>
      );
   }
}
