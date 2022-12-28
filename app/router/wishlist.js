const router = require('express').Router();
const auth = require('../../midleware/auth');
const {
  getWishlist,
  addWishlist,
  deleteWishlist,
} = require('../controllers/wishlistController');

router.get('/wishlist', auth, getWishlist);
router.post('/wishlist', auth, addWishlist);
router.delete('/wishlist/:destinationId', auth, deleteWishlist);

module.exports = router;
