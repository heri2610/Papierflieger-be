const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../controllers/paymentController');

router.get('/payments', auth, getPayment);
router.get('/payments/:id', auth, getPaymentById);
router.put('/payments/:id', auth, isAdmin, updatePayment);
router.delete('/payments/:id', auth, isAdmin, deletePayment);

module.exports = router;
