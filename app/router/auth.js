const router = require('express').Router();
const { login, register, verified } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.get('/sendEmail', verified);

module.exports = router;
