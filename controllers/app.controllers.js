const { resolve } = require('path');

exports.homePageCtrl = (req, res) => {
  res.sendFile(resolve('views', 'index.html'));
};

exports.booksPageCtrl = (req, res) => {
  res.sendFile(resolve('views', 'books-list.html'));
};
