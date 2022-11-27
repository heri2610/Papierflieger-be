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

router.get('/airplane ', getAirplane);
router.get('/airplane /:airplaneCode', getAirplaneById);
router.post('/airplane ', auth, isAdmin, addAirplane);
router.put('/airplane /:airplaneCode', auth, isAdmin, updateAirplane);
router.delete('/airplane /:airplaneCode', auth, isAdmin, deleteAirplane);

module.exports = router;
