const router = require('express').Router();
const auth = require('../../midleware/auth');
const {
  postNotif,
  getNotif,
  updateNotif,
} = require('../controllers/notifController');

router.post('/notifications', auth, postNotif);
router.get('/notifications', auth, getNotif);
router.put('/notifications', auth, updateNotif);

module.exports = router;
