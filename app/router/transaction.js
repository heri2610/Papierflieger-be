const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addTransaction,
  getTransactionByToken,
  updateTransaction,
  deleteTransaction,
  getTransaction,
} = require('../controllers/transactionController');

<<<<<<< HEAD
router.get('/transactions-token/:tokenTransaksi', auth, getTransactionByUser);
router.get('/transactions',  getTransaction);
router.get('/transactions/:id', auth, getTransactionByToken);
=======
router.get('/transactions', auth, isAdmin, getTransaction);
router.get('/transactions/:tokenTransaksi', auth, getTransactionByToken);
>>>>>>> 3cc96788a4b4b4b9efedc7683f8bfc17db994ae5
router.post('/transactions', auth, addTransaction);
router.put('/transactions', auth, updateTransaction);
router.delete('/transactions/:id', auth, isAdmin, deleteTransaction);

module.exports = router;
