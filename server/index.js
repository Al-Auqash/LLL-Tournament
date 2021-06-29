import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import cors from "cors";

import tournament from "./routes/tournament.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

app.use("/api/tournament", tournament);

const CONNECTION_URL =
  "mongodb+srv://Leo:LLL-tournament@cluster0.dmbth.mongodb.net/test";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
