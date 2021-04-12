const router = require('express').Router();
const {
  getUsersList,
  getUserProfile,
  signupForm,
  signinForm,
} = require('../controllers/users.controllers');

router.get('/signup', signupForm);
router.get('/signin', signinForm);

router.get('/', getUsersList);
router.get('/:username', getUserProfile);

module.exports = router;
