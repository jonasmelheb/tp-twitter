const { resolve } = require('path');

exports.homePageCtrl = (req, res) => {
  res.render('index.pug');
};

exports.booksPageCtrl = (req, res) => {
  res.sendFile(resolve('views', 'books-list.html'));
};
