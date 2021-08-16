const express = require("express");
const tournaments = require("../controllers/tournament.js");

const router = express.Router();

router.get("/api/", tournaments.getActiveTournaments);
router.get("/api/all/", tournaments.getTournaments);
router.get("/api/finished/", tournaments.getFinishedTournaments);
router.post("/api/create/", tournaments.createTournament);
// router.get("/tournament/:id", tournaments.getTournament);
// router.patch("/tournament/:id", tournaments.updateTournament);
// router.delete("/tournament/:id", tournaments.deleteTournament);

// router.get("/", async (req, res) => {
//   const dataRead = await tournaments.find();
//   res.render("index", { dataRead });
// });

module.exports = router;
