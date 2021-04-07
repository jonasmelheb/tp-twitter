const router = require('express').Router();
const routesMain = require('./app.routes');
const routesBooks = require('./books-api.routes');

router.use('/', routesMain);
router.use('/api/books', routesBooks);

module.exports = router;
