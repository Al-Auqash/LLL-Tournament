const express = require("express");
const mongoose = require("mongoose");
// const tournaments = require("../controllers/tournament.js");
const tournamentModel = require("../models/tournament.js");

const router = express.Router();

router.get("/api/tournament", async (req, res) => {
  try {
    const tournament = await tournamentModel.find();
    // res.json(`here is a ${tournament}`);
    console.log("berhasil");
    res.send({tournament});
    res.status(200).json(tournament);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("gagal");
  }
});
// router.get('/api/tournament', function(req, res) {
//     console.log("hello")
// });
// router.post("/tournament", tournaments.createTournament);
// router.get("/tournament/:id", tournaments.getTournament);
// router.patch("/tournament/:id", tournaments.updateTournament);
// router.delete("/tournament/:id", tournaments.deleteTournament);

// router.get("/", async (req, res) => {
//   const dataRead = await tournaments.find();
//   res.render("index", { dataRead });
// });

module.exports = router;
