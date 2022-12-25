import express from 'express';

import * as games from '../controllers/games';

const router = express.Router();

router.get('/api/all', games.getGames);
router.post('/api/create', games.createGame);
router.get('/api/:id', games.getGame);
router.put('/api/:id', games.updateGame);
router.delete('/api/:id', games.deleteGame);

export default router;
