const { Schedule } = require('../models');

const getSchedule = async (req, res) => {
  try {
    const dataFlight = await Schedule.findAll();
    res.status(200).json({
      dataFlight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getScheduleById = async (req, res) => {
  try {
    const { airplaneCode } = req.params;
    const flight = await Schedule.findOne({ where: { airplaneCode } });
    res.status(200).json({
      flight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addAirplane = async (req, res) => {
  try {
    const newFlight = await Schedule.create(req.body);
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      newFlight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateAirplane = async (req, res) => {
  try {
    const { airplaneCode } = req.params;
    await Schedule.update(req.body, { where: { airplaneCode } });
    res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteAirplane = async (req, res) => {
  try {
    const { airplaneCode } = req.params;
    await Schedule.delete({ where: { airplaneCode } });
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
  getSchedule,
  getScheduleById,
  addAirplane,
  updateAirplane,
  deleteAirplane,
};
