const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

/*router.use('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})*/
router.use('/movies', requiresAuth(), require('./movies'));
router.use('/api-docs', require('./swagger'));
router.use('/actors', requiresAuth(), require('./actors'))

module.exports = router;
