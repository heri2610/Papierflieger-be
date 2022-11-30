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

router.get('/tickets', getTicket);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', auth, isAdmin, addTicket);
router.put('/tickets/:id', auth, isAdmin, updateTicket);
router.delete('/tickets/:id', auth, isAdmin, deleteTicket);

module.exports = router;
