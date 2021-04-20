const { findUserById } = require('../queries/users.queries');
const { createNewTouite,
        findAllTouites,
        findTouitesAuthor, 
        updateTouiteById,
        deleteTouiteById,
        likeTouiteUser,
        unlikeTouiteUser,
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
    touiteCount = 0;
    for (let i = 0; i < touiteAndAuthor.length; i++) {
      if (touiteAndAuthor[i].author.id === user.id)
      touiteCount++;
    }
    res.render('pages/touites-page', { touiteCount,touiteAndAuthor, user });
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

exports.editTouite = async (req, res) => {
  const { touiteId } = req.params;
  const { content } = req.body; 
  try {
    await updateTouiteById(touiteId, content);
    res.redirect('/');
  }
  catch (e) { throw e }
}

exports.deleteTouite = async (req, res) => {
  const { touiteId } = req.params;
  try {
    await deleteTouiteById(touiteId);
    res.redirect('/');
  } catch (e) { throw e }
}

exports.likeTouite = async (req, res) => {
  const { touiteId } = req.params
  const { sub } = req.user
  try {
    await likeTouiteUser(touiteId,sub)
    res.redirect('/touites');
  }
  catch (e) { throw e }
}

exports.unlikeTouite = async (req, res) => {
  const { touiteId } = req.params
  const { sub } = req.user
  try {
    await unlikeTouiteUser(touiteId,sub)
    res.redirect('/touites');
  }
  catch (e) { throw e }
}