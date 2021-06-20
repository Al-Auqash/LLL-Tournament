import mongoose from "mongoose";

const authSchema = mongoose.Schema(
  {
    id_user: {
      type: Number,
      default: 0,
    },
    username: String,
    // email: String,
    password: String,
    selectedFile: String,
    role: {
      type: String,
      default: "Player",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    collection: "authentication",
  }
);

var authentication = mongoose.model("authentication", authSchema);

export default authentication;
