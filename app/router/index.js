const { Router, } = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');
const Auth = require('./auth');
const Users = require('./users');
const notif = require('./notif');
const ticket = require('./ticket');
const airplane = require('./airplane');
const airport = require('./airport');
const destination = require('./destination');
const payment = require('./payment');
const order = require('./order');
const wishlist = require('./wishlist');
const history = require('./history');
const transaction = require('./transaction');
const { getAboutUs, } = require('../controllers/aboutUsController');

const router = Router();

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});
router.get('/api/about-us', getAboutUs);

router.use('/api', Auth);
router.use('/api', Users);
router.use('/api', ticket);
router.use('/api', airplane);
router.use('/api', destination);
router.use('/api', airport);
router.use('/api', payment);
router.use('/api', order);
router.use('/api', notif);
router.use('/api', wishlist);
router.use('/api', history);
router.use('/api', transaction);

module.exports = router;
