const router = require('express').Router();
const appRoutes = require('./app.routes');
const apiBooksRoutes = require('./books-api.routes');

router.use('/', appRoutes);
router.use('/api/books', apiBooksRoutes);

module.exports = router;
