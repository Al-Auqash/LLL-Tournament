import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  id_user: {
    type: Number,
    default: 0,
  },
  username: String,
  inGameName: String,
  series: String,
  gameName: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var players = mongoose.model("players", playerSchema);

export default players;
