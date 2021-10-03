const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: "Player",
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("authentication", authSchema);
