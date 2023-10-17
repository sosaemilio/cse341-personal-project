const router = require('express').Router();

router.use('/movies', require('./movies'));
router.use('/api-docs', require('./swagger'));
router.use('/actors', require('./actors'))

module.exports = router;
