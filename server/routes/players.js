//Routes for players
const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playersController");

// api/players
router.post("/", playerController.createPlayer);
router.get("/", playerController.getPlayers);
router.put("/:id", playerController.updatePlayer);
router.get("/:id", playerController.getPlayer);
router.delete("/:id", playerController.deletePlayer);

module.exports = router;
