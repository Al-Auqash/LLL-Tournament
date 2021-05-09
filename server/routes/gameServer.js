import express from 'express';

import { getServers, getServer, createServer, updateServer, deleteServer } from '../controllers/gameServer.js';

const router = express.Router();

router.get('/', getServers);
router.post('/', createServer);
router.get('/:id', getServer);
router.patch('/:id', updateServer);
router.delete('/:id', deleteServer);

export default router;