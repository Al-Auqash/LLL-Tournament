import express from 'express';
import * as news from '../controllers/news';

const router = express.Router();

router.get('/api/all/', news.getNews);
router.get('/api/:id/', news.getNewsById);
router.post('/api/create/', news.createNews);
router.put('/api/:id/', news.updateNews);
router.delete('/api/:id', news.deleteNews);

export default router;
