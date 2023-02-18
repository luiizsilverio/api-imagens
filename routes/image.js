const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const ImageController = require("../controllers/imageController");

router.post("/", upload.single("file"), ImageController.create);
router.get("/", ImageController.findAll);
router.delete("/:id", ImageController.remove);

module.exports = router;
