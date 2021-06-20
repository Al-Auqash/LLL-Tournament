import mongoose from "mongoose";

const championSchema = mongoose.Schema(
  {
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
  },
  {
    collection: "champions",
  }
);

var champions = mongoose.model("champions", championSchema);

export default champions;
