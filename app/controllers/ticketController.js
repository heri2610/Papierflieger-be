/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const { Ticket, Airport, Airplane, } = require('../models');

const getTicket = async (req, res) => {
  try {
    const dataTicket = await Ticket.findAll({
      include: [
        {
          model: Airplane,
        },
        {
          model: Airport,
          as: 'from',
        },
        {
          model: Airport,
          as: 'to',
        },
        {
          model: Airport,
          as: 'transit',
        },
      ],
    });
    res.status(200).json({
      dataTicket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
// eslint-disable-next-line consistent-return
const searchTicket = async (req, res) => {
  const { flightFrom, flightTo, departureDate, returnDate, } = req.query;
  try {
    const tiketBerangkat = await Ticket.findAll(
      {
        where: { departureDate, flightFrom, flightTo, },
      },
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
          },
          {
            model: Airport,
            as: 'to',
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      }
    );
    if (!returnDate) {
      return res.status(200).json({
        message: 'tiket hasil pencarian',
        tiketBerangkat,
      });
    }
    const tiketPulang = await Ticket.findAll(
      {
        where: {
          departureDate: returnDate,
          flightFrom: flightTo,
          flightTo: flightFrom,
        },
      },
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
          },
          {
            model: Airport,
            as: 'to',
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      }
    );
    res.status(200).json({
      message: 'tiket hasil pencarian',
      tiketBerangkat,
      tiketPulang,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const getTicketById = async (req, res) => {
  try {
    const { id, } = req.params;
    const ticket = await Ticket.findOne(
      {
        where: { id, },
      },
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
          },
          {
            model: Airport,
            as: 'to',
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      }
    );
    res.status(200).json({
      ticket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addTickets = async(req, res)=>{
  const tikets = req.body;
  try {
    tikets.map((tiket)=>{
      if (
        !tiket.ticketNumber || 
        !tiket.departureDate || 
        !tiket.departureTime  || 
        !tiket.arrivalDate ||
        !tiket.arrivalTime  || 
        !tiket.flightFrom || 
        !tiket.flightTo || 
        !tiket.airplaneId || 
        !tiket.price || 
        !tiket.totalTransit || 
        !tiket.transitPoint || 
        !tiket.transitDuration || 
        !tiket.ticketType || 
        !tiket.flightDuration || 
        !tiket.arrivalTimeAtTransit  || 
        !tiket.departureTimeFromTransit){
        return res.status(200).json({
          message: 'inputan tdak boleh kosong',
        });
      }
    });
    if (tikets.length === 1) {
      const newTicket = await Ticket.create(tikets[0]);
      return res.status(200).json({
        message: 'tiket berhasil ditambahkan',
        newTicket,
      });
    }
    if (tikets.length === 2) {
      const newTicket1 = await Ticket.create(tikets[0]);
      const newTicket2 = await Ticket.create(tikets[1]);
      return res.status(200).json({
        message: 'tiket berhasil ditambahkan',
        newTicket1,
        newTicket2,
      });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(200).json({
      message: 'tiket berhasil ditambahkan',
      newTicket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id, } = req.params;
    await Ticket.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'tiket berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id, } = req.params;
    await Ticket.destroy({ where: { id, }, });
    res.status(200).json({
      message: 'tiket berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTicket,
  searchTicket,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
  addTickets,
};
