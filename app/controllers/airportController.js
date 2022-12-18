const { Airport, } = require('../models');
const ApiError = require('../../utils/ApiError');

const getAirport = async (req, res) => {
  try {
    const airports = await Airport.findAll();
    res.status(200).json({
      message: 'data semua bandara',
      airports,
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
    const airport = await Airport.findOne({ where: { id, }, });
    if (!airport) throw new ApiError(404, 'airport not found');
    res.status(200).json({
      airport,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addAirport = async (req, res) => {
  try {
    const newAirport = await Airport.create(req.body);
    res.status(200).json({
      message: 'data bandara berhasil ditambahkan',
      newAirport,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateAirport = async (req, res) => {
  try {
    const { id, } = req.params;
    const airport = await Airport.findOne({ where: { id, }, });
    if (!airport) throw new ApiError(404, 'airport not found');
    await Airport.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'data bandara berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteAirport = async (req, res) => {
  try {
    const { id, } = req.params;
    const airport = await Airport.findOne({ where: { id, }, });
    if (!airport) throw new ApiError(404, 'airport not found');
    await Airport.destroy({ where: { id, }, });
    res.status(200).json({
      message: 'data bandara berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAirport,
  getAirplaneById,
  addAirport,
  updateAirport,
  deleteAirport,
};
