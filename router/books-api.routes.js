const router = require('express').Router();
const {
  findBooksCtrl,
  findOneCtrl,
} = require('../controllers/books.controllers');

router.get('/', findBooksCtrl);
router.get('/:id', findOneCtrl);

module.exports = router;
