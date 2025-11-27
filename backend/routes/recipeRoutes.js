const express = require("express");
const router = express.Router();

const Controllers = require("../controllers");

// search Forkify API with req.body that contains an array of ingredients
router.post("/search", Controllers.recipeController.searchRecipes);

// display specific recipe 
router.get("/:id", Controllers.recipeController.getRecipeById)

module.exports = router;