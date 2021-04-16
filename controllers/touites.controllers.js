const { findUserById } = require('../queries/users.queries');
const { createNewTouite } = require('../queries/touites.queries');

exports.getTouitesPage = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.sub);
    const touites = [];
    res.render('pages/touites-page', { touites, user });
  }
  catch (e) { next(e) }
};

exports.getTouiteFormPage = (req, res) => {
  res.render('pages/touites-form-page', {
    touite: {},
  });
}

exports.createTouite = async (req, res) => {
  const { body, user } = req;
  try {
    await createNewTouite(body, user);
    res.redirect('/');
  }
  catch (e) { throw e }
}
