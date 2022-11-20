const { Router } = require('express');
const swaggerUI = require('swagger-ui-express');

const router = Router();
const swaggerDocument = require('../../docs/swagger.json');
const Auth = require('./auth');

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});

router.use('/api/auth', Auth);

module.exports = router;
