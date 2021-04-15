const router = require('express').Router();
const {
  getUsersList,
  getUserProfile,
  signupForm,
  signinForm,
  signup,
  signin,
} = require('../controllers/users.controllers');

router.get('/signup', signupForm);
router.get('/signin', signinForm);
router.post('/signup', signup);
router.post('/signin', signin);

router.get('/', getUsersList);
router.get('/:username', getUserProfile);

module.exports = router;
