const router = require('express').Router();
const {
  homePageCtrl,
} = require('../controllers');

router.get('/', homePageCtrl);

module.exports = router;
