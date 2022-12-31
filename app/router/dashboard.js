const router = require('express').Router();
const {getAboutUs,dashboardAdmin,notifCount,}  = require('../controllers/dashboardController');




router.get('/about-us', getAboutUs);
router.get('/dashboard-admin', dashboardAdmin);
router.get('/notif-count', notifCount);

module.exports = router;