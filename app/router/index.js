const { Router } = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');
const Auth = require('./auth');
const ticket = require('./ticket');
const airplane = require('./airplane');
const airport = require('./airport');
const destination = require('./destination');

const router = Router();

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});

router.use('/api', Auth);
router.use('/api', ticket);
router.use('/api', airplane);
router.use('/api', destination);
router.use('/api', airport);

module.exports = router;
