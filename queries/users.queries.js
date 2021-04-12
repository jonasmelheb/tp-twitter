const User = require('../database/models/user.model');

exports.createUser = (user) => {
  const newUser = new User(user);
  return newUser.save();
}

exports.findAllUsers = () => {
  return User.find().exec();
}

exports.findUserByUsername = (username) => {
  return User.findOne({ username }).exec();
}
