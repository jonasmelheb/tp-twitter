const User = require('../database/models/user.model');

exports.findAllUsers = () => {
  return User.find().exec();
}

exports.findUserByUsername = (username) => {
  return User.findOne({ username }).exec();
}
