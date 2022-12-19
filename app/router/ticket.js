const router = require('express').Router();
const auth = require('../../midleware/auth');
const isAdmin = require('../../midleware/isAdmin');
const {
  getTicket,
  searchTicket,
  addTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
  addTickets,
} = require('../controllers/ticketController');

router.get('/tickets', getTicket);
router.get('/search-tickets', searchTicket);
router.post('/add-tickets',auth, isAdmin, addTickets);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', auth, isAdmin, addTicket);
router.put('/tickets/:id', auth, isAdmin, updateTicket);
router.delete('/tickets/:id', auth, isAdmin, deleteTicket);

module.exports = router;
