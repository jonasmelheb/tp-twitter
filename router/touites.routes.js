const router = require('express').Router();
const {
  getTouitesPage,
  getTouiteFormPage,
  createTouite,
  editTouite,
  deleteTouite,
  likeTouite,
  unlikeTouite,
} = require('../controllers/touites.controllers');
  
router.get('/', getTouitesPage);
router.get('/new', getTouiteFormPage);
router.post('/', createTouite);
router.post('/edit/:touiteId', editTouite);
router.get('/:touiteId', deleteTouite);
router.get('/like/:touiteId', likeTouite);
router.get('/unlike/:touiteId', unlikeTouite);

module.exports = router;
