const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
  {
    // id_user: {
    //   type: Number,
    //   default: 0,
    // },
    name: String,
    team: String,
    username: String,
    email: String,
    password: String,
  },
  {
    collection: "players",
  }
);

module.exports = mongoose.model("player", playerSchema);
