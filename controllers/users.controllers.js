const { createToken } = require('../services/jwt.service');
const { resolve } = require('path');
const multer = require('multer');
const {
  createUser,
  findAllUsers,
  findUserByUsername,
  findUserToConnect,
  findUserById,
  followUserTouites,
  unfollowUserTouites
} = require('../queries/users.queries');
const { 
  findTouitesFollowed,
  findTouitesAuthor,
  findUserTouite
} = require('../queries/touites.queries');

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
  const { sub } = req.user
  try {
    const user = await findUserById(sub);
    const touites = await findTouitesFollowed(user.follows);
    const userTouites = await findUserTouite(sub)
    for await (userTouite of userTouites) {
      touites.push(userTouite)
    }
    let touiteAndAuthor = []
    for await (touite of touites) {
      touite["author"] = await findTouitesAuthor(touite.author)
      touiteAndAuthor.push(touite)
    }
    touiteCount = 0;
    for (let i = 0; i < touiteAndAuthor.length; i++) {
      if (touiteAndAuthor[i].author.id === user.id)
      touiteCount++;
    }
    res.render('pages/users-page', { user, touiteAndAuthor });
  }
  catch (e) {
    console.error(e);
    next(e);
  }
}

exports.followUser = async (req, res) => {
  const { userId } = req.params
  const { sub } = req.user
  try {
    await followUserTouites(sub,userId)
    res.redirect('/touites');
  }
  catch (e) { throw e }
}

exports.unfollowUser = async (req, res) => {
  const { userId } = req.params
  const { sub } = req.user
  try {
    await unfollowUserTouites(sub,userId)
    res.redirect('/touites');
  }
  catch (e) { throw e }
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

exports.signout = (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
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
