const User = require('../database/models/user.model');

exports.usersPage = (req, res) => {
  User.find()
  .then(users => {
    res.render('users-list', { users });
  })
  .catch(error => {
    console.error(error);
    res.render('users-list');
  });
}
