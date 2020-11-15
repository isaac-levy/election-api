const express = require("express");
const router = express.Router();
const ElectionController = require("../controllers/election");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, ElectionController.electionGetAll);
router.get("/:electionId", ElectionController.electionGetOne);

module.exports = router;