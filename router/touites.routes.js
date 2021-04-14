const router = require('express').Router();
const {
  getTouitesList,
  getTouitesForm,
  createTouites,
  updateTouites,
  deleteTouites,
} = require('../controllers/touites.controllers');

router.get('/', getTouitesList);
router.get('/form', getTouitesForm);
router.post('/form/create', createTouites);
router.post('/form/update/:touiteId', updateTouites);
router.get('/delete/:id', deleteTouites);

module.exports = router;
