const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getOrder,
  addOrder,
  getOrderById,
  deleteOrder,
} = require('../controllers/orderController');

router.get('/orders', auth, getOrder);
router.get('/orders/:id', auth, getOrderById);
router.post('/orders', auth, addOrder);
router.delete('/orders/:id', auth, isAdmin, deleteOrder);

module.exports = router;
