const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getAirplane,
  addAirplane,
  deleteAirplane,
} = require('../controllers/wishlistController');

router.get('/airplanes', getAirplane);
router.post('/airplanes', auth, isAdmin, addAirplane);
router.delete('/airplanes/:id', auth, isAdmin, deleteAirplane);

module.exports = router;
