/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const { History, Transaction, Order,Ticket,Airport, Airplane, } = require('../models');

const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const transaction = await Transaction.findAll({ where: { userId, }, });
    const order = [];
    for (const trans of transaction) {
      const transOrders = await Order.findAll({ where: { id: trans.orderId, }, });
      order.push(...transOrders);
    }
    const ticket = [];
    for (const ord of order) {
      const ordTickets = await Ticket.findAll({ where: { id: ord.ticketId,
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
          {
            model: Airport,
            as: 'transit',
          },
        ], }, });
      ticket.push(...ordTickets);
    }
    res.status(200).json({
      transaction,
      order,
      ticket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addHistory = async (userId, transactionId) => {
  try {
    const history = await History.create({
      userId,
      transactionId,
    });
    return history;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getHistory,
  addHistory,
};
