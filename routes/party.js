const express = require("express");
const router = express.Router();
const PartyController = require("../controllers/party");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, PartyController.partyGetAll);
router.get("/:partyId", PartyController.partyGetOne);

module.exports = router;