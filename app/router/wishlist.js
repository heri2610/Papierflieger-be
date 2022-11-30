const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getAirplane,
  getAirplaneById,
  addAirplane,
  updateAirplane,
  deleteAirplane,
} = require('../controllers/wishlistController');

router.get('/airplanes', getAirplane);
router.get('/airplanes/:id', getAirplaneById);
router.post('/airplanes', auth, isAdmin, addAirplane);
router.put('/airplanes/:id', auth, isAdmin, updateAirplane);
router.delete('/airplanes/:id', auth, isAdmin, deleteAirplane);

module.exports = router;
