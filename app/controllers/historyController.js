const { History, Transaction, } = require('../models');

const getHistory = async (req, res) => {
  const userId = req.user.id;
  try {
    const orderList = await History.findAll(
      {
        where: { userId, },
      },
      {
        include: [
          {
            model: Transaction,
          },
        ],
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
