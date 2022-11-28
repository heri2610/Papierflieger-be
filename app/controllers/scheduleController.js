const { Schedule } = require('../models');
const { Flight } = require('../models');
const { Airplane } = require('../models');

const getAllSchedule = async (req, res) => {
  try {
    const dataSchedule = await Schedule.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Flight,
          include: [{ model: Airplane }],
        },
      ],
      // include: [{ model: Airplane }],
    });
    res.status(200).json({
      dataSchedule,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const getSchedule = async (req, res) => {
  try {
    const dataSchedule = await Schedule.findAll();
    res.status(200).json({
      dataSchedule,
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

const addSchedule = async (req, res) => {
  try {
    const newSchedule = await Schedule.create(req.body);
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      newSchedule,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateSchedule = async (req, res) => {
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

const deleteSchedule = async (req, res) => {
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
  getAllSchedule,
  getSchedule,
  getScheduleById,
  addSchedule,
  updateSchedule,
  deleteSchedule,
};
