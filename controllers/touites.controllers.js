const Touites = require('../database/models/touites.model');

const {
  createTouite,
} = require('../queries/touites.queries');

exports.getTouitesList = (req, res) => {
  // Get touites list
  const touites = [];
  res.render('pages/touites-list-page', { touites });
};

exports.getUserTouitesList = (req, res) => {
  // Get User's touites list
  const touites = [];
  res.render('pages/touites-list-page', { touites });
};

exports.createTouites = async (req, res) => {
  // Get touites list
  const { body, session} = req;
  const userEmail = session.email;
  try {
    await createTouite(body, userEmail);
    res.redirect('/touites');    
  } catch (error) {
    console.log(error);
  }
};
