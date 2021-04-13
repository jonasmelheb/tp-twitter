const Touites = require('../database/models/touites.model');

exports.createTouite = ({ touitesText }, userEmail) => {
    const newTouites = new Touites({ touitesText, userEmail });
    return newTouites.save();
  }