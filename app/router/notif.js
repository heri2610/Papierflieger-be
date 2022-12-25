const router = require('express').Router();
const auth = require('../../midleware/auth');
const {
  getNotif,
  updateNotif,
} = require('../controllers/notifControler');

router.get('/notifications', auth, getNotif);
router.get('/notifications/:id',auth, updateNotif);

module.exports = router;
