const router = require('express').Router();
const {
  getTouitesPage,
  getTouiteFormPage,
  createTouite,
} = require('../controllers/touites.controllers');

router.get('/', getTouitesPage);
router.get('/new', getTouiteFormPage);

router.post('/', createTouite);

module.exports = router;
