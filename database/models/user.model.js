const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { hashRounds } = require('../../environment');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required !"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Wrong email !"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  avatar: {
    type: String,
    default: '/static/img/avatars/default-avatar.svg',
  },
  follows: {
    type: [String],
  },
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, hashRounds);
}

const User = mongoose.model('user', userSchema);
module.exports = User;
