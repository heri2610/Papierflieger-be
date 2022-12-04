const router = require('express').Router();
const auth = require('../../midleware/auth');
const upload = require('../../midleware/uploader');
const {
  login,
  register,
  verified,
  updateProfile,
  getProfile,
} = require('../controllers/authController');

router.post('/auth/login', login);
router.post('/auth/profile', getProfile);
router.post('/auth/register', register);
router.put('/auth/update-profile', auth, upload.single('image'), updateProfile);
router.get('/auth/send-email', verified);

module.exports = router;
