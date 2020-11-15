const express = require("express");
const router = express.Router();
const SeatController = require("../controllers/seat");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, SeatController.seatGetAll);
router.get("/:seatId", SeatController.seatGetOne);

module.exports = router;