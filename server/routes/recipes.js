const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

router.get('/', RecipeController.getAll);
router.post('/', RecipeController.create);
router.get('/:id', RecipeController.getOne);
router.put('/:id', RecipeController.update);
router.delete('/:id', RecipeController.delete);

module.exports = router;
