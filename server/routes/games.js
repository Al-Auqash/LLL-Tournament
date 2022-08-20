const express = require('express');

const games = require('../controllers/games.ts');

const router = express.Router();

router.get('/api/all', games.getGames);
router.post('/api/create', games.createGame);
router.get('/api/:id', games.getGame);
router.put('/api/:id', games.updateGame);
router.delete('/api/:id', games.deleteGame);

module.exports = router;