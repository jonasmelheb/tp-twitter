const express = require('express');
const app = express();

const tabs = [
  {
    name: 'Accueil',
    active: true,
    link: '/home',
  },
  {
    name: 'Contact',
    active: false,
    link: '/contact',
  },
];


app.listen(3000);
