const Touites = require('../database/models/touites.model');
const User = require('../database/models/user.model');

const {
  createTouite,
  deleteTouite,
  updateTouite,
} = require('../queries/touites.queries');

const {
  findUserByEmail,
} = require('../queries/users.queries');

exports.getTouitesForm = (req, res) => {
  // Get touites form
  res.render('pages/touites-form-page');
};

exports.getTouitesList = (req, res) => {
  const touites = [];
  res.render('pages/touites-list-page', { touites });
};


exports.createTouites = async (req, res) => {
  // Get touites list
  const { body, session} = req;
  const userEmail = session.email;
  const { username } = req.session;
  try {
    await createTouite(body, userEmail);
    res.redirect(`/users/${username}`);  
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTouites = async (req, res) => {
  const { id } = req.params;
  const { username } = req.session;
  try {
    await deleteTouite(id);
    res.redirect(`/users/${username}`);    
  } catch (error) {
    console.log(error);
  }
};

exports.updateTouites = async (req, res) => {
  const { touiteId } = req.params;
  const { touiteText } = req.body;
  const { username } = req.session;
  try {
    await updateTouite(touiteId, touiteText);
    res.redirect(`/users/${username}`);
  }
  catch(err){
    console.log(err);
  }
};
