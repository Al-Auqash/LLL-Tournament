const express = require("express");
const tournaments = require("../controllers/tournament.js");

const router = express.Router();

router.get("/api/", tournaments.getTournaments);
// router.post("/tournament", tournaments.createTournament);
// router.get("/tournament/:id", tournaments.getTournament);
// router.patch("/tournament/:id", tournaments.updateTournament);
// router.delete("/tournament/:id", tournaments.deleteTournament);

// router.get("/", async (req, res) => {
//   const dataRead = await tournaments.find();
//   res.render("index", { dataRead });
// });

module.exports = router;
