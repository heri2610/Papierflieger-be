const { Airplane, } = require('../models');
const ApiError = require('../../utils/ApiError');

const getAirplane = async (req, res) => {
  try {
    const dataAirplane = await Airplane.findAll();
    res.status(200).json({
      message: 'data semua pesawat',
      dataAirplane,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getAirplaneById = async (req, res) => {
  try {
    const { id, } = req.params;
    const flight = await Airplane.findOne({ where: { id, }, });
    if (!flight) throw new ApiError(404, 'airplane not found');
    res.status(200).json({
      message: 'data pesawat berdasarkan id',
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
    const newFlight = await Airplane.create(req.body);
    res.status(200).json({
      message: 'data pesawat berhasil ditambahkan',
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
    const { id, } = req.params;
    const flight = await Airplane.findOne({ where: { id, }, });
    if (!flight) throw new ApiError(404, 'airplane not found');
    await Airplane.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'data pesawat berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteAirplane = async (req, res) => {
  try {
    const { id, } = req.params;
    const flight = await Airplane.findOne({ where: { id, }, });
    if (!flight) throw new ApiError(404, 'airplane not found');
    await Airplane.destroy({ where: { id, }, });
    res.status(200).json({
      message: 'data pesawat berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAirplane,
  getAirplaneById,
  addAirplane,
  updateAirplane,
  deleteAirplane,
};
