const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getFlight,
  addFlight,
  getFlightById,
  updateflight,
  deleteFlight,
} = require('../controllers/flightController');

router.get('/flights', auth, getFlight);
router.get('/flights/:flightNumber', auth, getFlightById);
router.post('/flights', auth, isAdmin, addFlight);
router.put('/flights/:flightNumber', auth, isAdmin, updateflight);
router.delete('/flights/:flightNumber', auth, isAdmin, deleteFlight);

module.exports = router;
