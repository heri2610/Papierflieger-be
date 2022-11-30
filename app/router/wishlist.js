const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getWishlist,
  addWishlist,
  deleteWishlist,
} = require('../controllers/wishlistController');

router.get('/airplanes', getWishlist);
router.post('/airplanes', auth, isAdmin, addWishlist);
router.delete('/airplanes/:id', auth, isAdmin, deleteWishlist);

module.exports = router;
