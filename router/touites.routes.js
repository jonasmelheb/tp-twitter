const router = require('express').Router();
const {
  getTouitesPage,
  getTouiteFormPage,
  createTouite,
  deleteTouite
} = require('../controllers/touites.controllers');

router.get('/', getTouitesPage);
router.get('/new', getTouiteFormPage);
router.post('/', createTouite);
router.get('/:touiteId', deleteTouite);

module.exports = router;
