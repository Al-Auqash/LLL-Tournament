const express = require("express");

const player = require("../controllers/player.js");

const router = express.Router();

router.get("/", player.getPlayers);
router.post("/signUp/", player.createPlayer);
router.get("/:id", player.getPlayer);
router.patch("/:id", player.updatePlayer);
router.delete("/:id", player.deletePlayer);

module.exports = router;
