const express = require("express");
const router = express.Router();
const RegionController = require("../controllers/region");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, RegionController.regionGetAll);
router.get("/:regionId", RegionController.regionGetOne);

module.exports = router;