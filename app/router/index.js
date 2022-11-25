const { Router } = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');
const Auth = require('./auth');
const flight = require('./flight');

const router = Router();

router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});

router.use('/api-docs', swaggerUI.serve);
router.use('/api', Auth);
router.use('/api', flight);

module.exports = router;
