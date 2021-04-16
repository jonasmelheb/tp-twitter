const { encode } = require('jwt-simple');
const moment = require('moment');
const { jwt: { secret }} = require('../environment');

exports.createToken = ({ _id, username, email, avatar, follows }) => {
  const payload = {
    sub: _id,
    username, email, avatar, follows,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };
  return encode(payload, secret);
}
