import express from 'express';

import { getPlayers, getPlayer, createPlayer, updatePlayer, deletePlayer } from '../controllers/players.js';

const router = express.Router();

router.get('/', getPlayers);
router.post('/', createPlayer);
router.get('/:id', getPlayer);
router.patch('/:id', updatePlayer);
router.delete('/:id', deletePlayer);

export default router;