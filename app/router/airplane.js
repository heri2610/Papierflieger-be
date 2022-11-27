const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getAirplane,
  getAirplaneById,
  addAirplane,
  updateAirplane,
  deleteAirplane,
} = require('../controllers/airplaneController');

router.get('/airplanes', getAirplane);
router.get('/airplanes/:airplaneCode', getAirplaneById);
router.post('/airplanes', auth, isAdmin, addAirplane);
router.put('/airplanes/:airplaneCode', auth, isAdmin, updateAirplane);
router.delete('/airplanes/:airplaneCode', auth, isAdmin, deleteAirplane);

module.exports = router;
