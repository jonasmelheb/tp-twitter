const router = require('express').Router();
const {
  getTouitesList,
  createTouites
} = require('../controllers/touites.controllers');

router.get('/', getTouitesList);
router.post('/create', createTouites);

module.exports = router;
