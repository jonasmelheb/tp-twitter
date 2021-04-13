const User = require('../database/models/user.model');

exports.createUser = ({ username, email, password }) => {
  const passwordHashed = User.hashPassword(password);
  const newUser = new User({ username, email, password: passwordHashed });
  console.log(passwordHashed);
  // return newUser.save();
}

exports.findAllUsers = () => {
  return User.find().exec();
}

exports.findUserByUsername = (username) => {
  return User.findOne({ username }).exec();
}
