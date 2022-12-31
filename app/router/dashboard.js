const router = require('express').Router();
const {getAboutUs,dashboardAdmin,notifCount,}  = require('../controllers/dashboardController');
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');

router.get('/about-us', getAboutUs);
router.get('/dashboard-admin',auth,isAdmin, dashboardAdmin);
router.get('/notif-count',auth, notifCount);

module.exports = router;