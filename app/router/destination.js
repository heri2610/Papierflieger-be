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

router.get('/destinations', getDestination);
router.get('/destinations/:id', getDestinationById);
router.post(
  '/destinations',
  auth,
  isAdmin,
  upload.array('images'),
  addDestination
);
router.put('/destinations/:id', auth, isAdmin, updateDestination);
router.delete('/destinations/:id', auth, isAdmin, deleteDestination);

module.exports = router;
