const router = require('express').Router();
const auth = require('../../midleware/auth');
const {
  getWishlist,
  addWishlist,
  deleteWishlist,
} = require('../controllers/wishlistController');

router.get('/wishlist', getWishlist);
router.post('/wishlist', auth, addWishlist);
router.delete('/wishlist/:id', auth, deleteWishlist);

module.exports = router;
