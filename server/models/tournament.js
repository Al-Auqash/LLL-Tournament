var mongoose = require("mongoose");

const gameTournamentSchema = mongoose.Schema(
  {
    name: String,
    status: String,
    prize: String,
  },
  {
    collection: "tournaments",
  }
);

module.exports = mongoose.model("tournaments", gameTournamentSchema);