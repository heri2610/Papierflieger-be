const { v4: uuidv4, } = require('uuid');
const { Order, Ticket, Airport, Airplane, } = require('../models');
const { addTransaction, } = require('./transactionController');

const getOrder = async (req, res) => {
  try {
    const orderList = await Order.findAll({
      order: [['createdAt', 'DESC',],],
    });
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
  try {
    const tokenTransaksi = `${uuidv4()}${Date.now()}${Math.random()}`;
    const userId = req.user.id;
    const { passengers, } = req.body;
    const orderId = [];
    let trip;
    const ticketId = [];
    const totalPriceOneOrder = [];
    if (passengers[0].ticketId.length === 2) {
      trip = 'round-trip';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 2; i++) {
        ticketId.push(passengers[0].ticketId[i]);
      }
    } else {
      trip = 'one-way';
      ticketId.push(passengers[0].ticketId[0]);
    }
    passengers.forEach(async (reqBody) => {
      const order = await Order.create(reqBody);
      orderId.push(order.id);
    });
    ticketId.forEach(async (id) => {
      const prices = await Ticket.findOne({ where: { id, }, });
      totalPriceOneOrder.push(prices.price);
    });
    const tiketBerangkat = await Ticket.findAll(
      {
        where: { id: ticketId[0], },
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
        ],
      }
    );
    setTimeout(async () => {
      let totalPrice;
      let price;
      if (ticketId.length === 2) {
        totalPrice =
          (totalPriceOneOrder[0] + totalPriceOneOrder[1]) * passengers.length;
        price = totalPriceOneOrder[0] + totalPriceOneOrder[1];
      } else {
        totalPrice = totalPriceOneOrder[0] * passengers.length;
        // eslint-disable-next-line prefer-destructuring
        price = totalPriceOneOrder[0];
      }
      const transaksi = await addTransaction(
        userId,
        orderId,
        totalPrice,
        trip,
        tokenTransaksi,
        price
      );
      if (ticketId.length === 2) {
        const tiketPulang = await Ticket.findAll(
          {
            where: { id: ticketId[1], },
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
            ],
          }
        );
        res.status(200).json({
          message: 'data berhasil ditambahkan',
          tokenTransaction: transaksi.tokenTransaction,
          totalPrice: transaksi.totalPrice,
          tiketBerangkat,
          tiketPulang,
          price,
          passengers: passengers.length,
        });
      } else {
        res.status(200).json({
          message: 'data berhasil ditambahkan',
          tokenTransaction: transaksi.tokenTransaction,
          totalPrice: transaksi.totalPrice,
          tiketBerangkat,
          price,
          passengers: passengers.length,
        });
      }
    }, 400);
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
