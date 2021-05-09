import express from 'express';

import { getChampions, getChampion, createChampion, updateChampion, deleteChampion } from '../controllers/champions.js';

const router = express.Router();

router.get('/', getChampions);
router.post('/', createChampion);
router.get('/:id', getChampion);
router.patch('/:id', updateChampion);
router.delete('/:id', deleteChampion);

export default router;