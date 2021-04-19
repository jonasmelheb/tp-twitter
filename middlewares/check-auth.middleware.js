const { jwt: { secret }} = require('../environment');
const { decode } = require('jwt-simple');
const moment = require('moment');

exports.checkAuth = (req, res, next) => {
  if (!req.cookies.jwt) {
    console.log('access not allowed');
    return res.redirect('/users/signin');
  }
  const token = req.cookies.jwt;
  try {
    const payload = decode(token, secret);
    if (payload && payload.exp <= moment.unix()) {
      console.log('token expired');
      return res.redirect('/users/signin');
    }
    else if (payload) {
      req.user = payload;
      next();
    }
    else {
      console.log('no valid token');
      res.redirect('/users/signin');
    }
  }
  catch (e) {
    console.log('cannot decode token');
    res.redirect('/users/signin');
  }
}
