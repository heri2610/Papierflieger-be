const { Order } = require('../models');

const getOrder = async (req, res) => {
  try {
    const orderList = await Order.findAll();
    res.status(200).json({
      orderList,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id },
    });
    res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      newOrder,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.destroy({ where: { id } });
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
  getOrder,
  getOrderById,
  addOrder,
  deleteOrder,
};
