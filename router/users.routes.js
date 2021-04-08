const router = require('express').Router();
const {
  usersPage,
} = require('../controllers/users.controllers');

router.get('/', usersPage);

module.exports = router;
