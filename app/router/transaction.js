const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addTransaction,
  getAllTransaction,
  getTransactionByToken,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.get('/transactions', auth, isAdmin, getAllTransaction);
router.get('/transactions/:tokenTransaksi', auth, getTransactionByToken);
router.post('/transactions', auth, addTransaction);
router.put('/transactions', auth, updateTransaction);
router.delete('/transactions/:id', auth, isAdmin, deleteTransaction);

module.exports = router;
