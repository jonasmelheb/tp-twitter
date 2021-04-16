const { createToken } = require('../services/jwt.service');
const { resolve } = require('path');
const multer = require('multer');
const {
  createUser,
  findAllUsers,
  findUserByUsername,
  findUserToConnect,
  findUserById,
} = require('../queries/users.queries');

exports.getUsersList = async (req, res, next) => {
  try {
    const users = await findAllUsers();
    
    res.render('pages/users-form-page', { users });
  }
  catch (e) {
    console.error(e);
    next(e);
  } 
}

exports.getUserProfile = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await findUserByUsername(username);
    const touites = [];
    res.render('pages/users-form-page', { user, touites });
  }
  catch (e) {
    console.error(e);
    next(e);
  }
}

exports.signupForm = (req, res) => {
  res.render('pages/users-form-page', { signup: true });
}

exports.signinForm = (req, res) => {
  res.render('pages/users-form-page', { signup: false });
}

exports.signup = async (req, res) => {
  const { body } = req;
  try {
    await createUser(body);
    res.redirect('/users/signin');
  }
  catch (e) {
    res.render('pages/users-form-page', {
      signup: true,
      errors: [ e.message ],
    });
  }
}

exports.signin = async (req, res) => {
  const { body } = req;
  try {
    const user = await findUserToConnect(body);
    const token = createToken(user);
    res.cookie('jwt', token, {
      maxAge: 1000*60*60*24*30
    });
    res.redirect('/');
  }
  catch (e) {
    res.render('pages/users-form-page', {
      signup: false,
      errors: [ e.message ],
    });
  }
}

const uploadImage = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve('public', 'img', 'avatars'));
    },
    filename: (req, file, callback) => {
      const filename = `${Date.now()}-${file.originalname}`;
      callback(null, filename);
    }
  })
});

exports.updateUserImage = [
  uploadImage.single('inputAvatar'),
  async (req, res, next) => {
    try {
      const user = await findUserById(req.user.sub);
      user.avatar = `/static/img/avatars/${req.file.filename}`;
      await user.save();
      res.redirect('/');
    }
    catch (e) { next(e) }
  }
]
