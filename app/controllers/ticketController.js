/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

const { Ticket, Airport, Airplane, } = require('../models');
const ApiError = require('../../utils/ApiError');

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
const createTiketNew = async (tiketBerangkats, departureDate) => {
  const tikets = tiketBerangkats[0];
  const newTiket = await Ticket.create({
    ticketNumber: tikets.ticketNumber,
    departureDate,
    departureTime: tikets.departureTime,
    arrivalDate: tikets.arrivalDate,
    arrivalTime: tikets.arrivalTime,
    flightFrom: tikets.flightFrom,
    flightTo: tikets.flightTo,
    airplaneId: tikets.airplaneId,
    price: tikets.price,
    totalTransit: tikets.totalTransit,
    transitPoint: tikets.transitPoint,
    transitDuration: tikets.transitDuration,
    ticketType: tikets.ticketType,
    flightDuration: tikets.flightDuration,
    arrivalTimeAtTransit: tikets.arrivalTimeAtTransit,
    departureTimeFromTransit: tikets.departureTimeFromTransit,
  });
  const tiketBerangkat = await Ticket.findAll(
    {
      where: { id: newTiket.id, },
      include: [
        {
          model: Airplane,
        },
        {
          model: Airport,
          as: 'from',
          where: { id: newTiket.flightFrom, },
        },
        {
          model: Airport,
          as: 'to',
          where: { id: newTiket.flightTo, },
        },
        {
          model: Airport,
          as: 'transit',
        },
      ],
    }
  );
  return tiketBerangkat;
};
// eslint-disable-next-line consistent-return
const searchTicket = async (req, res) => {
  const { departureDate, returnDate, } = req.query;
  const flightFrom = parseInt(req.query.flightFrom);
  const flightTo = parseInt(req.query.flightTo);
  // const person = parseInt(req.query.person);
  try {
    const tiketBerangkat = await Ticket.findAll(
      {
        where: {departureDate, },
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
            where: { id: flightFrom, },
          },
          {
            model: Airport,
            as: 'to',
            where: { id: flightTo, },
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      }
    );
    if (tiketBerangkat.length === 0 && !returnDate) {
      const tiketBerangkat2 = await Ticket.findAll({
        where: { flightFrom, flightTo, },
      });
      if (tiketBerangkat2.length === 0) {
        const bandara1 = await Airport.findOne({ where: { id: flightFrom, }, });
        const bandara2 = await Airport.findOne({ where: { id: flightTo, }, });
        throw new ApiError(400, `mohon maaf, perjalanan dari ${bandara1.city}
           ke ${bandara2.city} tidak tersedia`);
      }
      const newTiketBerangkat = await createTiketNew(tiketBerangkat2, departureDate);
      return res.status(200).json({
        message: 'tiket hasil pencarian',
        tiketBerangkat:newTiketBerangkat,
      });
    }
    if (!returnDate) {
      return res.status(200).json({
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
    if (tiketBerangkat.length === 0 && tiketPulang.length === 0) {
      const tiketBerangkat2 = await Ticket.findAll({
        where: { flightFrom, flightTo, },
      });
      const tiketPulang2 = await Ticket.findAll({
        where: { flightFrom: flightTo, flightTo: flightFrom, },
      });
      if (tiketBerangkat2.length === 0) {
        const bandara1 = await Airport.findOne({ where: { id: flightFrom, }, });
        const bandara2 = await Airport.findOne({ where: { id: flightTo, }, });
        throw new ApiError(400, `mohon maaf, perjalanan dari ${bandara1.city}
           ke ${bandara2.city} tidak tersedia`);
      }
      if (tiketPulang2.length === 0) {
        const bandara1 = await Airport.findOne({ where: { id: flightFrom, }, });
        const bandara2 = await Airport.findOne({ where: { id: flightTo, }, });
        throw new ApiError(400, `mohon maaf, perjalanan dari ${bandara1.city}
           ke ${bandara2.city} tidak tersedia`);
      }
      const newTiketBerangkat = await createTiketNew(tiketBerangkat2, departureDate);
      const newTiketPulang = await createTiketNew(tiketPulang2, departureDate);
      return res.status(200).json({
        message: 'tiket hasil pencarian',
        tiketBerangkat:newTiketBerangkat,
        tiketPulang: newTiketPulang,
      });
    }
    if (tiketPulang.length === 0) {
      const tiketPulang2 = await Ticket.findAll({
        where: { flightFrom: flightTo, flightTo: flightFrom, },
      });
      if (tiketPulang2.length === 0) {
        const bandara1 = await Airport.findOne({
          where: { id: flightFrom, },
        });
        const bandara2 = await Airport.findOne({
          where: { id: flightTo, },
        });
        throw new ApiError(400, `mohon maaf, perjalanan dari ${bandara1.city}
           ke ${bandara2.city} tidak tersedia`);
      }
      const newTiketPulang = await createTiketNew(tiketPulang2, departureDate);
      return res.status(200).json({
        message: 'tiket hasil pencarian',
        tiketBerangkat,
        tiketPulang:newTiketPulang,
      });
    }
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
    const ticket = await Ticket.findOne({
      where: { id, },
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
      ticket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addTickets = async (req, res) => {
  const { tikets, } = req.body;
  try {
    tikets.map((tiket) => {
      if (
        !tiket.ticketNumber ||
        !tiket.departureDate ||
        !tiket.departureTime ||
        !tiket.arrivalDate ||
        !tiket.arrivalTime ||
        !tiket.flightFrom ||
        !tiket.flightTo ||
        !tiket.airplaneId ||
        !tiket.price ||
        !tiket.totalTransit ||
        !tiket.transitPoint ||
        !tiket.transitDuration ||
        !tiket.ticketType ||
        !tiket.flightDuration ||
        !tiket.arrivalTimeAtTransit ||
        !tiket.departureTimeFromTransit) {
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
