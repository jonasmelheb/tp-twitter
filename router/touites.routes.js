const router = require('express').Router();
const {
  getTouitesPage,
} = require('../controllers/touites.controllers');

router.get('/', getTouitesPage);

module.exports = router;
