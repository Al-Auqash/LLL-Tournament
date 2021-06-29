import mongoose from "mongoose";

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

var tournament = mongoose.model("tournament", gameTournamentSchema);

export default tournament;
