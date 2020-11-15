const express = require("express");
const router = express.Router();
const ResultController = require("../controllers/result");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, ResultController.resultGetAll);
router.get("/:resultId", ResultController.resultGetOne);

module.exports = router;