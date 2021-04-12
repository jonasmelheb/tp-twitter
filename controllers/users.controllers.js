const User = require('../database/models/user.model');
const {
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
