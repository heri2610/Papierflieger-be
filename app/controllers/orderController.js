const { v4: uuidv4, } = require('uuid');
const { Order, Ticket, } = require('../models');
const { addTransaction, } = require('./transactionController');

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
    const { id, } = req.params;
    const order = await Order.findOne({
      where: { id, },
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
  const tokenTransaksi = `${uuidv4()}${Date.now()}${Math.random()}`;
  const userId = req.user.id;
  const reqBodies = req.body;
  const orderId = [];
  let trip;
  const ticketId = [];
  const totalPriceOneOrder = [];
  try {
    if (reqBodies[0].ticketId.length === 2) {
      trip = 'round-trip';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 2; i++) {
        ticketId.push(reqBodies[0].ticketId[i]);
      }
    } else {
      trip = 'one-way';
      ticketId.push(reqBodies[0].ticketId[0]);
    }
    reqBodies.forEach(async (reqBody) => {
      const order = await Order.create(reqBody);
      orderId.push(order.id);
    });
    ticketId.forEach(async (id) => {
      const prices = await Ticket.findOne({ where: { id, }, });
      totalPriceOneOrder.push(prices.price);
    });
    let totalPrice;
    if (ticketId.length === 2) {
      totalPrice =
        (totalPriceOneOrder[0] + totalPriceOneOrder[1]) * reqBodies.length;
    } else {
      totalPrice = totalPriceOneOrder[0] * reqBodies.length;
    }
    const transaksi = addTransaction(
      userId,
      orderId,
      totalPrice,
      trip,
      tokenTransaksi
    );
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      tokenTransaction: transaksi.tokenTransaction,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id, } = req.params;
    await Order.destroy({ where: { id, }, });
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
