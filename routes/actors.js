const router = require('express').Router();
const actorController = require('../controllers/actors');

// Get all the Actors
router.get('/', actorController.getActors);

// Add Acotr
router.post('/', actorController.addActors);

// Update Actors
router.put('/:id', actorController.updateActor);

// Delete Actors
router.delete('/:id', actorController.deleteActor);

module.exports = router;
