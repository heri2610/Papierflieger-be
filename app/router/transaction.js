const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addTransaction,
  getTransactionByUser,
  getTransactionByToken,
  updateTransaction,
  deleteTransaction,
  getTransaction,
} = require('../controllers/transactionController');

router.get('/transactions-token/:tokenTransaksi', auth, getTransactionByUser);
router.get('/transactions',  getTransaction);
router.get('/transactions/:id', auth, getTransactionByToken);
router.post('/transactions', auth, addTransaction);
router.put('/transactions', auth, updateTransaction);
router.delete('/transactions/:id', auth, isAdmin, deleteTransaction);

module.exports = router;