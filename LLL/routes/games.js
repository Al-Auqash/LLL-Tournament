import express from 'express';

import { getGames, getGame, createGame, updateGame, deleteGame } from '../controllers/games.js';

const router = express.Router();

router.get('/', getGames);
router.post('/', createGame);
router.get('/:id', getGame);
router.patch('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;