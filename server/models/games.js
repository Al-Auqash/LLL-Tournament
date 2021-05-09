import mongoose from "mongoose";

const gameSchema = mongoose.Schema(
  {
    id_game: {
      type: Number,
      default: 0,
    },
    gameName: String,
  },
  {
    collection: "games",
  }
);

var games = mongoose.model("games", gameSchema);

export default games;
