var mongoose = require("mongoose");

const gameServerSchema = mongoose.Schema(
  {
    gameServer: String,
    gameServerAlias: String,
  },
  {
    collection: "gameServer",
  }
);

module.exports = mongoose.model("gameServer", gameServerSchema);
