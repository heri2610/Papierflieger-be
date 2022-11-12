const { Router } = require("express");
const router = Router();
const Auth = require("./auth");

router.use("/api/auth/", Auth);

module.exports = router;
