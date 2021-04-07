const router = require('express').Router();
const {
  homePageCtrl,
  booksPageCtrl,
} = require('../controllers/app.controllers');

router.get('/', homePageCtrl);
router.get('/books', booksPageCtrl);

module.exports = router;
