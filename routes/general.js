const express = require("express");
const router = express.Router();
const GeneralController = require('../controllers/general');

router.get("/", GeneralController.allRoutes);

module.exports = router;