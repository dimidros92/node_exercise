const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:userId/conversed-with", userController.conversedWith);

router.get("/", userController.byPredicate);

module.exports = router;
