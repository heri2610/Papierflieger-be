const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getTicket,
  addTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');

router.get('/ticket', getTicket);
router.get('/ticket/:id', getTicketById);
router.post('/ticket', auth, isAdmin, addTicket);
router.put('/ticket/:id', auth, isAdmin, updateTicket);
router.delete('/ticket/:id', auth, isAdmin, deleteTicket);

module.exports = router;
