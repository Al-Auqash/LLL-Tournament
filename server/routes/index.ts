import express from 'express';

const router = express.Router();

import authentication from './authentication';
import tournament from './tournament';
import gameServer from './gameServer';
import player from './player';
import game from './games';
import user from './user';
import news from './news';

router.use('/authentication', authentication);
router.use('/tournament', tournament);
router.use('/gameServer', gameServer);
router.use('/player', player);
router.use('/game', game);
router.use('/user', user);
router.use('/news', news);

export default router;
