const { findUserById } = require('../queries/users.queries');
const { createNewTouite,
        findAllTouites,
        findTouitesAuthor, 
        deleteTouiteById,
 } = require('../queries/touites.queries');
const Touite = require('../database/models/touite.model');

exports.getTouitesPage = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.sub);
    const touites = await findAllTouites()
    let touiteAndAuthor = []
    for await (touite of touites) {
      touite["author"] = await findTouitesAuthor(touite.author)
      touiteAndAuthor.push(touite)
    }
    res.render('pages/touites-page', { touiteAndAuthor, user });
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

exports.deleteTouite = async (req, res) => {
  const { touiteId } = req.params;
  try {
    await deleteTouiteById(touiteId);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
}
