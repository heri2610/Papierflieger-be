const { Router } = require("express");
const router = Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');
const Auth = require("./auth");

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

router.use("/api/auth", Auth);

module.exports = router;
