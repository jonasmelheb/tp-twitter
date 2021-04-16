const router = require('express').Router();
const { checkAuth } = require('../middlewares/check-auth.middleware');
const {
  getUsersList,
  getUserProfile,
  updateUserImage,
  signupForm,
  signinForm,
  signup,
  signin,
} = require('../controllers/users.controllers');

router.get('/signup', signupForm);
router.get('/signin', signinForm);
router.post('/signup', signup);
router.post('/signin', signin);

router.get('/', checkAuth, getUsersList);
router.get('/:username', checkAuth, getUserProfile);

router.post('/update/image', checkAuth, updateUserImage);

module.exports = router;
