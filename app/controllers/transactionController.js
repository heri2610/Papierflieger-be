const { Transaction, Order, Ticket, } = require('../models');
const { addHistory, } = require('./historyController');

const getTransactionById = async (req, res) => {
  try {
    const { id, } = req.params;
    const transaksi = await Transaction.findOne(
      {
        include: [
          {
            model: Order,
            include: [{ model: Ticket, },],
          },
        ],
      },
      {
        where: { id, },
      }
    );
    res.status(200).json({
      transaksi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addTransaction = async (userId, orderId, totalPrice, trip) => {
  try {
    const newTransaksi = await Transaction.create(
      userId,
      orderId,
      totalPrice,
      trip
    );
    addHistory(userId, newTransaksi.id);
    return newTransaksi;
  } catch (error) {
    return error;
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id, } = req.params;
    await Transaction.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id, } = req.params;
    await Transaction.destroy({ where: { id, }, });
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
  getTransactionById,
  addTransaction,
  updateTransaction,
  deleteTransaction,
};
