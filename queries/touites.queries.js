const Touites = require('../database/models/touites.model');

exports.createTouite = ({ touitesText }, userEmail) => {
    const newTouites = new Touites({ touitesText, userEmail });
    return newTouites.save();
  }
  

exports.findUserTouites = (userEmail) => {
  return Touites.find({userEmail}).sort({ _id: -1 }).exec();
}

exports.deleteTouite = (id) => {
  return Touites.findByIdAndDelete(id).exec();
}

exports.updateTouite = (id, touitesText) => {
  return Touites.findByIdAndUpdate(id, {touitesText}).exec();
}

