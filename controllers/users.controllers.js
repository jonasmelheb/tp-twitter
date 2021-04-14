const User = require('../database/models/user.model');
const Touites = require('../database/models/touites.model');
const bcrypt = require('bcrypt');

const {
  createUser,
  connectUser,
  findAllUsers,
  findUserByUsername,
} = require('../queries/users.queries');

const {
  findUserTouites,
} = require('../queries/touites.queries');

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
  const { email }  = req.session;
  try {
    const user = await findUserByUsername(username);
    const touites = await findUserTouites(email);
    res.render('pages/user-profile-page', { user, touites });
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
    res.redirect('/users/signup');
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
    const userFinded = await connectUser(body.email, body.password);
    const verified = bcrypt.compareSync(body.password, userFinded.password);
    if (verified) {
      sess = req.session;
      sess.email = body.email;
      sess.username = userFinded.username;
      res.redirect(`/users/${userFinded.username}`)
    }
  } catch (e) {
    res.render('pages/users-form-page', {
      signup: true,
      errors: [ e.message ]
  })
}
}
