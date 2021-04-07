const { books } = require('../database/data.json');

exports.findBooksCtrl = (req, res) => {
  res.status(200).json({ books });
}

exports.findOneCtrl = (req, res) => {
  const { id: bookId } = req.params;
  const book = books.find(b => b.id === bookId);
  if (book) res.status(200).json(book);
  else res.status(404).json({
    error: "Book not found"
  });
}
