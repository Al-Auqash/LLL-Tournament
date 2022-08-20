const express = require('express');
const gameServer =  require('../controllers/gameServer.ts');

const router = express.Router();

router.get('/api/all', gameServer.getServers);
router.post('/api/create', gameServer.createServer);
router.get('/api/:id', gameServer.getServer);
router.put('/api/:id', gameServer.updateServer);
// router.patch('/api/:id', gameServer.updateServer);
router.delete('/api/:id', gameServer.deleteServer);


module.exports = router;