import mongoose from "mongoose";

const gameServerSchema = mongoose.Schema(
  {
    id_server: {
      type: Number,
      default: 0,
    },
    gameServer: String,
  },
  {
    collection: "gameServer",
  }
);

var gameServer = mongoose.model("gameServer", gameServerSchema);

export default gameServer;
