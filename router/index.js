const router = require('express').Router();
const { checkAuth } = require('../middlewares/check-auth.middleware');
const touitesRouter = require('./touites.routes');
const usersRouter = require('./users.routes');

router.use('/touites', checkAuth, touitesRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => res.redirect('/touites'));

module.exports = router;
