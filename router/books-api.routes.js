const router = require('express').Router();
const { findBooksCtrl } = require('../controllers/books.controllers');

router.get('/', findBooksCtrl);

module.exports = router;
