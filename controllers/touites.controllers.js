exports.getTouitesList = (req, res) => {
  // Get touites list
  const touites = [];
  res.render('pages/touites-list-page', { touites });
};
