const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// import cors from "cors";

const tournament = require("./routes/tournament.js");
const { ModuleFilenameHelpers } = require("webpack");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

app.use("/", tournament);
app.use("/api/tournament", tournament);

const CONNECTION_URL =
  // "mongodb+srv://Leo:LLL-tournament@cluster0.dmbth.mongodb.net/LLL-Tournament";
  "mongodb+srv://Leo:LLL-tournament@cluster0.dmbth.mongodb.net/LLL-Tournament?retryWrites=true&w=majority"
// "mongodb://localhost:27017";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;

db.on("error", console.error.bind("error"));
db.once("open", () => {
  console.log("connected");
});

mongoose.set("useFindAndModify", false);

module.exports = app;