const express = require('express');
const path = require('path');
const app = express();

const indexHTMLFile = path.resolve('index.html');

// Configuration de l'app Express
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(indexHTMLFile);
})

app.listen(3000);
