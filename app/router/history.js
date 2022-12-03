const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const { getHistory, addHistory } = require('../controllers/historyController');

router.get('/orders', getHistory);
router.post('/orders', auth, isAdmin, addHistory);

module.exports = router;
