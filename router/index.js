const router = require('express').Router();
const touitesRouter = require('./touites.routes');
const usersRouter = require('./users.routes');

router.use('/touites', touitesRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => res.redirect('/touites'));

module.exports = router;
