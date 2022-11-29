const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getAirport,
  getAirplaneById,
  addAirport,
  updateAirport,
  deleteAirport,
} = require('../controllers/airportController');

router.get('/airport', getAirport);
router.get('/airport/:id', getAirplaneById);
router.post('/airport', auth, isAdmin, addAirport);
router.put('/airport/:id', auth, isAdmin, updateAirport);
router.delete('/airport/:id', auth, isAdmin, deleteAirport);

module.exports = router;
