const router = require('express').Router();
const actorController = require('../controllers/actors');

// Get all the contacts
router.get('/', actorController.getActors);

// Add Contact
router.post('/', actorController.addActors);

module.exports = router;
