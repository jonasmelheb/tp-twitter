const router = require('express').Router();
const appRoutes = require('./app.routes');
const usersRouter = require('./users.routes');

router.use('/', appRoutes);
router.use('/users', usersRouter);

module.exports = router;
