const express = require ('express');
const router = express.Router();
const video = require('../controllers/videoController')

router.get("/", video.getAll);
router.get("/:id", video.getOne);
router.post("/", video.create);
router.patch("/:id", video.update);
router.delete("/:id", video.delete);

module.exports = router;

