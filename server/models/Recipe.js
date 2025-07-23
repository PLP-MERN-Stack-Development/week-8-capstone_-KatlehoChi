const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
