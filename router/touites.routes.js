const router = require('express').Router();
const {
  getTouitesList,
} = require('../controllers/touites.controllers');

router.get('/', getTouitesList);

module.exports = router;
