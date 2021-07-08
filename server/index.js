const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const tournament = require("./routes/tournament");
const player = require("./routes/player");
// const usersRouter = require('./routes/users');

app.use("/tournament", tournament);
app.use("/player", player);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
