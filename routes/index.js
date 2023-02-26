const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);
// any other routes 
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;