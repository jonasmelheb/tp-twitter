const router = require('express').Router();
const {
  getUsersList,
  getUserProfile,
} = require('../controllers/users.controllers');

router.get('/', getUsersList);
router.get('/:username', getUserProfile);

module.exports = router;
