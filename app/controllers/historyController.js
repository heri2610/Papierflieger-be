const { History, Transaction, } = require('../models');

const getHistory = async (req, res) => {
  const { id, } = req.user.id;
  try {
    const orderList = await History.findAll(
      {
        include: [
          {
            model: Transaction,
          },
        ],
      },
      {
        where: { id, },
      }
    );
    res.status(200).json({
      orderList,
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
