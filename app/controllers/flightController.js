const { flight } = require('../models');

const getFlght = async (req, res) => {
  try {
    const dataFlight = await flight.findAll();
    res.status(200).json({
      dataFlight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addFlight = (req, res) => {};
const updateflight = (req, res) => {};
const deleteFlight = (req, res) => {};
module.exports = {
  getFlght,
  addFlight,
  updateflight,
  deleteFlight,
};
