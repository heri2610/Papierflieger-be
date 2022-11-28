const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getSchedule,
  getScheduleById,
  addSchedule,
  updateSchedule,
  deleteSchedule,
  getAllSchedule,
} = require('../controllers/scheduleController');

router.get('/schedules-all/:id', getAllSchedule);
router.get('/schedules', getSchedule);
router.get('/schedules/:id', getScheduleById);
router.post('/schedules', auth, isAdmin, addSchedule);
router.put('/schedules/:id', auth, isAdmin, updateSchedule);
router.delete('/schedules/:id', auth, isAdmin, deleteSchedule);

module.exports = router;
