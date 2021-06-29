import express from 'express';

import { getTournaments, getTournament, createTournament, updateTournament, deleteTournament } from '../controllers/tournament.js';

const router = express.Router();

router.get('/api/tournament', getTournaments);
router.post('/tournament', createTournament);
router.get('/tournament/:id', getTournament);
router.patch('/tournament/:id', updateTournament);
router.delete('/tournament/:id', deleteTournament);

export default router;