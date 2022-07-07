const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URL;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// const authentication = require("./routes/authentication")
const tournament = require("./routes/tournament");
const gameServer = require("./routes/gameServer");
const player = require("./routes/player");
const game = require("./routes/games");
const user = require("./routes/user");
// const usersRouter = require('./routes/users');

// app.use("/auth", authentication)
app.use("/tournament", tournament);
app.use("/gameServer", gameServer);
app.use("/player", player);
app.use("/game", game);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
