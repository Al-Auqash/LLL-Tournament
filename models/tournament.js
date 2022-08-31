var mongoose = require("mongoose");

const gameTournamentSchema = mongoose.Schema(
  {
    name: String,
    status: String,
    prize: String,
    game: String,
    region: String,
  },
  {
    collection: "tournaments",
  }
);

module.exports = mongoose.model("tournamentModel", gameTournamentSchema);
