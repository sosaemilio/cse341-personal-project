const router = require('express').Router();
const movieController = require('../controllers/movies');

// Get all the Movies
router.get('/', movieController.getMovies);

// Add Movies
router.post('/', movieController.addMovies);

// Update Movies
router.put('/:id', movieController.updateMovie);

// Delete Movies
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
