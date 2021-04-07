const { books } = require('../database/data.json');

exports.findBooksCtrl = (req, res) => {
  res.status(200).json({ books });
}

exports.findOneCtrl = (req, res) => {
  console.log(req.params.id);
  res.end();
}
