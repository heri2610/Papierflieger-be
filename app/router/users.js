const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getUser, addAdmin,
} = require('../controllers/userController');

router.get('/users', auth, isAdmin, getUser);
router.put('/add-admin', auth, isAdmin,  addAdmin);

module.exports = router;
