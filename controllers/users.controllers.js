const User = require('../database/models/user.model');

exports.usersPage = (req, res) => {
  User.find({})
  .then(users => {
    if (!users.length) {
      return res.status(404).json({ error: 'no users' });
    }
    res.status(200).json(users);
  })
  .catch();
}