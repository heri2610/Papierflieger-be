const router = require('express').Router();
const auth = require('../../midleware/auth');
const upload = require('../../midleware/uploader');
const {
  login,
  register,
  verified,
  updateProfile,
  getProfile,
  resetPassword,
} = require('../controllers/authController');

router.post('/auth/login', login);
router.get('/auth/profile', auth, getProfile);
router.post('/auth/register', register);
router.put('/auth/update-profile', auth, upload.single('image'), updateProfile);
router.get('/auth/send-email', verified);
router.get('/auth/reset-password', auth, resetPassword);

module.exports = router;
