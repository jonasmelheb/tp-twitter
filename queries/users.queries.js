const User = require('../database/models/user.model');

exports.createUser = ({ username, email, password }) => {
  const passwordHashed = User.hashPassword(password);
  const newUser = new User({ username, email, password: passwordHashed });
  return newUser.save();
}

exports.findAllUsers = () => {
  return User.find().exec();
}

exports.findUserByUsername = (username) => {
  return User.findOne({ username }).exec();
}

exports.findUserToConnect = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email }).exec();
    if (user) { // Vérification du mot de passe
      delete user.password;
      return user;
    }
    else {
      throw "user not found";
    }
  }
  catch (e) { throw e }
}
