import express from 'express';

import * as player from '../controllers/player';

const router = express.Router();

router.get('/', player.getPlayers);
router.post('/signUp/', player.createPlayer);
router.get('/:id', player.getPlayer);
router.patch('/:id', player.updatePlayer);
router.delete('/:id', player.deletePlayer);

export default router;
