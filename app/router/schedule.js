const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getSchedule,
  getScheduleById,
  addSchedule,
  updateSchedule,
  deleteSchedule,
} = require('../controllers/scheduleController');

router.get('/schedule ', getSchedule);
router.get('/schedule /:id', getScheduleById);
router.post('/schedule ', auth, isAdmin, addSchedule);
router.put('/schedule /:id', auth, isAdmin, updateSchedule);
router.delete('/schedule /:id', auth, isAdmin, deleteSchedule);

module.exports = router;
