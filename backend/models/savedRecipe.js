const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedRecipeSchema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  recipeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("SavedRecipe", savedRecipeSchema);
