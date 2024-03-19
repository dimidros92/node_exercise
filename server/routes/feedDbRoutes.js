const express = require("express");
const router = express.Router();
const feedDbController = require("../controllers/feedDbController");

router.post("/", feedDbController.feedDB);

module.exports = router;
