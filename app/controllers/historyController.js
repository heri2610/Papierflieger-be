const { History, Transaction, Order,Ticket, } = require('../models');

const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const transaction = await Transaction.findAll(
      {
        where: { userId, },
      }
    );
    const order = [];
    // eslint-disable-next-line max-len, no-return-await
    await transaction.map((item)=>item.orderId.map(async(id)=>order.push(await Order.findOne({where:{id,},}))));
    setTimeout(() => {
      const ticket = [];
      // eslint-disable-next-line max-len, no-return-await
      order.map((item)=>item.ticketId.map(async(id)=>ticket.push(await Ticket.findOne({where:{id,},}))));
      setTimeout(() => {
        res.status(200).json({
          transaction,
          order,
          ticket,
        });
      }, 1000);
    }, 1100);
 
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
