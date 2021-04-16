const { findUserById } = require('../queries/users.queries');

exports.getTouitesPage = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.sub);
    const touites = [];
    res.render('pages/touites-page', { touites, user });
  }
  catch (e) { next(e) }
};
