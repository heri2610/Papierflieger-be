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

router.get('/airports', getAirport);
router.get('/airports/:id', getAirplaneById);
router.post('/airports', auth, isAdmin, addAirport);
router.put('/airports/:id', auth, isAdmin, updateAirport);
router.delete('/airports/:id', auth, isAdmin, deleteAirport);

module.exports = router;
