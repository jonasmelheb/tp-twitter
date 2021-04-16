const Touite = require('../database/models/touite.model');

exports.createNewTouite = (reqBody, { sub }) => {
  const newTouite = new Touite({ ...reqBody, author: sub });
  return newTouite.save();
}