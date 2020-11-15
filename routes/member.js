const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/member");
const limitAndOffset = require("../middleware/limitAndOffset");

router.get("/", limitAndOffset, MemberController.memberGetAll);
router.get("/:memberId", MemberController.memberGetOne);

module.exports = router;