const express = require("express");
const news = require("../controllers/news.ts");

const router = express.Router();

router.get("/api/all/", news.getNews);
router.get("/api/:id/", news.getNewsById);
router.post("/api/create/", news.createNews);
router.put("/api/:id/", news.updateNews);
router.delete("/api/:id", news.deleteNews);

module.exports = router;
