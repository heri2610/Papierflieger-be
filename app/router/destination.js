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
} = require('../controllers/destinationControoller');

router.get('/destination', getDestination);
router.get('/destination/:id', getDestinationById);
router.post(
  '/destination',
  auth,
  isAdmin,
  upload.array('images'),
  addDestination
);
router.put('/destination/:id', auth, isAdmin, updateDestination);
router.delete('/destination/:id', auth, isAdmin, deleteDestination);

module.exports = router;
