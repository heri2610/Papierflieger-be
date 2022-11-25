const router = require('express').Router();
const { login, register, verified } = require('../controllers/authController');
// gunakan ini jika ada upload mage
// const Uploader = require('../middlewares/uploader');
// ini contoh
// router.post(
//   '/login',
//   Authentication,
//   Uploader.single('image'),
//   login
// );

router.post('/login', login);
router.post('/register', register);
router.get('/send-email', verified);

module.exports = router;
