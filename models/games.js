const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
  {
    gameName: String,
    genre: String,
    developer: String,
    publisher: String
  },
  {
    collection: "games",
  }
);

module.exports = mongoose.model("games", gameSchema);
