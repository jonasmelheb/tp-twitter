exports.getTouitesPage = (req, res) => {
  // Get touites list
  const touites = [];
  res.render('pages/touites-page', { touites });
};
