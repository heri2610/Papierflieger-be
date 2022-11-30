const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getWishlist,
  addWishlist,
  deleteWishlist,
} = require('../controllers/wishlistController');

router.get('/wishlish', getWishlist);
router.post('/wishlish', auth, isAdmin, addWishlist);
router.delete('/wishlish/:id', auth, isAdmin, deleteWishlist);

module.exports = router;
