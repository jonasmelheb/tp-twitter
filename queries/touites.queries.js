const Touite = require('../database/models/touite.model');
const User = require('../database/models/user.model');

exports.createNewTouite = (reqBody, { sub }) => {
  const newTouite = new Touite({ ...reqBody, author: sub });
  return newTouite.save();
}

exports.findAllTouites = () => {
  return Touite.find().sort({ _id: -1 }).exec();
}

exports.findTouitesAuthor = (id) => {
  return User.findById(id).exec();
}

exports.findUserTouite = (id) => {
  return Touite.find({ author:id }).sort({ _id: -1 }).exec();
}

exports.findTouitesFollowed = (usersId) => {
  return Touite.find({ author: usersId }).sort({ _id: -1 }).exec()
}

exports.likeTouiteUser = (id, userId) => {
  return Touite.findByIdAndUpdate(id,{ $push: { likes: [userId] }}).exec();
}

exports.unlikeTouiteUser = (id, userId) => {
  return Touite.findByIdAndUpdate(id,{ $pull: { likes: userId }}, {safe: true, upsert: true}).exec();
}

exports.updateTouiteById = (id, content) => {
  return Touite.findByIdAndUpdate (id, { content }).exec()
}

exports.deleteTouiteById = (id) => {
  return Touite.findByIdAndDelete(id).exec();
}