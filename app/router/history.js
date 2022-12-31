const router = require('express').Router();
// const auth = require('../../midleware/auth');
const { getHistory, } = require('../controllers/historyController');

router.get('/histories', getHistory);

module.exports = router;
