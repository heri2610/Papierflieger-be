const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const upload = require('../../midleware/uploader');
const {
  getDestination,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination,
} = require('../controllers/destination');

router.get('/schedules', getDestination);
router.get('/schedules/:id', getDestinationById);
router.post(
  '/schedules',
  auth,
  isAdmin,
  upload.array('images'),
  addDestination
);
router.put('/schedules/:id', auth, isAdmin, updateDestination);
router.delete('/schedules/:id', auth, isAdmin, deleteDestination);

module.exports = router;
