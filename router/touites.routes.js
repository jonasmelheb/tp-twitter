const router = require('express').Router();
const {
  getTouitesPage,
  getTouiteFormPage,
  createTouite,
  likeTouite,
  unlikeTouite,
  editTouite,
  deleteTouite
} = require('../controllers/touites.controllers');
  
router.get('/', getTouitesPage);
router.get('/new', getTouiteFormPage);
router.post('/', createTouite);
router.get('/like/:touiteId', likeTouite);
router.get('/unlike/:touiteId', unlikeTouite);
router.post('/edit/:touiteId', editTouite);
router.get('/:touiteId', deleteTouite);

module.exports = router;
