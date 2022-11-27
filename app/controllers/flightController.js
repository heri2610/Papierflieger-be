const { Flight } = require('../models');

const getFlight = async (req, res) => {
  try {
    const dataFlight = await Flight.findAll();
    res.status(200).json({
      dataFlight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getFlightById = (req, res) => { };

const addFlight = async (req, res) => {
  try {
    const {
      flightNumber,
      airplaneCode,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      totalTransit,
      transitPoint,
      transitDuration
    } = req.body;

    const newFlight = await Flight.create({
      flightNumber,
      airplaneCode,
      flightFrom,
      flightTo,
      departureTime,
      arrivalTime,
      totalTransit,
      transitPoint,
      transitDuration
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateflight = (req, res) => { };

const deleteFlight = (req, res) => { };

module.exports = {
  getFlight,
  getFlightById,
  addFlight,
  updateflight,
  deleteFlight,
};
