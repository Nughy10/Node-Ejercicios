const express = require("express");
const Character = require("../models/Character");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const character = await Character.findById(id);
    if (character) {
      return res.status(200).json(character);
    } else {
      const error = new Error("No character found by this id");
      error.status = 404;
      return next(error);
    }
  } catch (error) {
    return next(error)
  }
});

module.exports = router;
