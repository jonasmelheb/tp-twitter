const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');

const {
  createUser,
  connectUser,
  findAllUsers,
  findUserByUsername,
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
    // console.log(user);
    console.log(req.session);
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
    const userFined = await connectUser(body.email, body.password);
    const verified = bcrypt.compareSync(body.password, userFined.password);
    if (verified) {
      sess = req.session;
      sess.email = body.email;
      res.redirect('/touites')
    }
  } catch (e) {
    res.render('pages/users-form-page', {
      signup: true,
      errors: [ e.message ]
  })
}
}