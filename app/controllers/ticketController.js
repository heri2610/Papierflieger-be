const { Tiket, Airport, Airplane } = require('../models');

const getTicket = async (req, res) => {
  try {
    const dataTicket = await Tiket.findAll({
      include: [{ Airplane }, { Airport }],
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

const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await Tiket.findOne({ where: { id } });
    res.status(200).json({
      flight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addTicket = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      ticketNumber,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      flightFrom,
      flightTo,
      airplaneId,
      price,
      seat,
      totalTransit = '',
      transitPoint = '',
      transitDuration = '',
    } = req.body;
    const newTicket = await Tiket.create({
      ticketNumber,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      flightFrom,
      flightTo,
      airplaneId,
      price,
      seat,
      totalTransit,
      transitPoint,
      transitDuration,
    });
    res.status(200).json({
      message: 'data berhasil ditambahkan',
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
    const { id } = req.params;
    await Tiket.update(req.body, { where: { id } });
    res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Tiket.destroy({ where: { id } });
    res.status(200).json({
      message: 'data berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTicket,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
};
