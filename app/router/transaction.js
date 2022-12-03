const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  addTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

router.get('/transaction/:id', getTransactionById);
router.post('/transaction', auth, isAdmin, addTransaction);
router.put('/transaction/:id', auth, isAdmin, updateTransaction);
router.delete('/transaction/:id', auth, isAdmin, deleteTransaction);

module.exports = router;
