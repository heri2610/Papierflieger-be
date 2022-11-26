const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getFlght,
  addFlight,
  updateflight,
  deleteFlight,
} = require('../controllers/flightController');

router.get('/flights', auth, getFlght);
router.post('/flights', auth, isAdmin, addFlight);
router.put('/flights/:id', auth, isAdmin, updateflight);
router.delete('/flights/:id', auth, isAdmin, deleteFlight);

module.exports = router;
