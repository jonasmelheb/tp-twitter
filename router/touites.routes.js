const router = require('express').Router();
const {
  getTouitesPage,
  getTouiteFormPage,
  createTouite,
  editTouite,
  deleteTouite,
} = require('../controllers/touites.controllers');
  
router.get('/', getTouitesPage);
router.get('/new', getTouiteFormPage);
router.post('/', createTouite);
router.post('/edit/:touiteId', editTouite);
router.get('/:touiteId', deleteTouite);

module.exports = router;
