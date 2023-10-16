const router = require('express').Router();
const movieController = require('../controllers/movies');

// Get all the contacts
router.get('/', movieController.getMovies);

// Add Contact
router.post('/', movieController.addMovie);

module.exports = router;
