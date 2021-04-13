const mongoose = require('mongoose');

const touitesSchema = mongoose.Schema({
  touitesText: {
    type: String,
    required: [true, "A content is required !"],
  },
  userEmail: {
    type: String,
    required: [true, "Veuillez vous connecter!"],
  }
});

const Touites = mongoose.model('touites', touitesSchema);
module.exports = Touites;
