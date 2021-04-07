const router = require('express').Router();
const { homePageCtrl } = require('../controllers/app.controllers');

router.get('/', homePageCtrl);

module.exports = router;
