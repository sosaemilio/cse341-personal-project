const router = require('express').Router();

router.use('/movies', require('./movies'));
//router.use('/api-docs', require('./swagger'));

module.exports = router;
