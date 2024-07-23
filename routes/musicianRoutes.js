const express = require("express");

const router = express.Router();

const musicianController = require("../controllers/musicianController");

//define routes
router.get("/", musicianController.getAllMusicians);
router.post("/", musicianController.createMusician);
router.get("/:id", musicianController.getMusicianByID);
router.get("/manager/:managerId", musicianController.getAllMusiciansByManager);


router.put("/:id", musicianController.updateMusician);
router.delete("/:id", musicianController.deleteMusician); 


//export router

module.exports = router;