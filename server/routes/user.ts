import express from 'express';
import * as user from '../controllers/user.js';

const router = express.Router();

router.get('/api/all', user.getUsers);
router.post('/api/create', user.createUser);
router.get('/api/:id', user.getUser);
router.put('/api/:id', user.updateUser);
// router.patch('/api/:id', user.updateUser);
router.delete('/api/:id', user.deleteUser);

export default router;
