var mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    role: String,
    username: String,
    email: String,
    password: String,
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);
