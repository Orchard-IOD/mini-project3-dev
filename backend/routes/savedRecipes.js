const express = require("express");
const router = express.Router();

const { SavedRecipe } = require("../models");
const auth = require("../middleware/auth");

// SAVE a recipe
router.post("/", auth, async (req, res) => {
  try {
    const saved = await SavedRecipe.create({
      userID: req.user._id,
      recipeID: req.body.recipeID
    });

    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error saving recipe" });
  }
});

// GET all saved recipes for that user
router.get("/", auth, async (req, res) => { //before express runs auth checks the user's token
  const saved = await SavedRecipe
    .find({ userID: req.user._id })
    .populate("recipeID");

  res.json(saved);
});

module.exports = router;
