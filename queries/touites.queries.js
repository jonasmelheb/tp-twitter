const Touite = require('../database/models/touite.model');
const User = require('../database/models/user.model');

exports.createNewTouite = (reqBody, { sub }) => {
  const newTouite = new Touite({ ...reqBody, author: sub });
  return newTouite.save();
}

exports.findAllTouites = () => {
  return Touite.find().exec();
}

exports.findTouitesAuthor = (id) => {
  return User.findById(id).exec();
}

exports.deleteTouiteById = (id) => {
  return Touite.findByIdAndDelete(id).exec();
}