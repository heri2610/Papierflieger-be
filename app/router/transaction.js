const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.get('/transactions/:id', auth, getTransactionById);
router.post('/transactions', auth, addTransaction);
router.put('/transactions/:id', auth, isAdmin, updateTransaction);
router.delete('/transactions/:id', auth, isAdmin, deleteTransaction);

module.exports = router;
