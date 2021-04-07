fetch('http://localhost:3000/api/books')
  .then(res => {
    return res.json();
  })
  .then(({ books }) => {
    const htmlContent = books.map(b =>
      `<li><strong>Title:</strong> ${b.title} - <strong>Prix:</strong> ${b.price.toFixed(2)} €</li>`
    ).join('');
    document
      .querySelector('ul')
      .innerHTML = htmlContent;
  });
