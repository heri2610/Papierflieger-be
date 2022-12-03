const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addPayment,
  updatePayment,
  deletePayment,
} = require('../controllers/ticketController');

router.post('/tickets', auth, isAdmin, addPayment);
router.put('/tickets/:id', auth, isAdmin, updatePayment);
router.delete('/tickets/:id', auth, isAdmin, deletePayment);

module.exports = router;
