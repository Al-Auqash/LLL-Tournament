const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("./config/database");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// database
database();

const authentication = require("./routes/authentication");
const tournament = require("./routes/tournament");
const gameServer = require("./routes/gameServer");
const player = require("./routes/player");
const game = require("./routes/games");
const user = require("./routes/user");
// const usersRouter = require('./routes/users');

app.use("/api/authentication", authentication);
app.use("/tournament", tournament);
app.use("/gameServer", gameServer);
app.use("/player", player);
app.use("/game", game);
app.use("/user", user);

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
module.exports = app;
