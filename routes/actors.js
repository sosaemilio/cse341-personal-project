const router = require('express').Router();
const actorController = require('../controllers/actors');
const validator = require('../middleware/validator');

// Get all the Actors
router.get('/', actorController.getActors);

// Add Acotr
router.post('/', validator.actorValidator, actorController.addActors);

// Update Actors
router.put('/:id', validator.actorValidator, actorController.updateActor);

// Delete Actors
router.delete('/:id', actorController.deleteActor);

module.exports = router;
