const { Transaction, Order, Ticket, Payment, } = require('../models');
const { addHistory, } = require('./historyController');
const { addPayment, } = require('./paymentController');

const getTransactionByUser = async (req, res) => {
  try {
    const { id, } = req.params;
    const transaksi = await Transaction.findOne(
      {
        where: { userid: id, },
        include: [
          {
            model: Order,
            include: [
              {
                model: Ticket,
              },
            ],
          },
        ],
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
const getTransaction = async (req, res) => {
  try {
    const transaksi = await Transaction.findAll(
      {
        include: [{ model: Payment, },
        ],
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
const getTransactionByToken = async (req, res) => {
  const Bank = [
    { bankName: 'Mandiri', accountNumber: 2504253627, },
    { bankName: 'BRI', accountNumber: 1508384772, },
    { bankName: 'BTN', accountNumber: 134565672, },
    { bankName: 'BCA', accountNumber: 13487643, },
  ];
  const { tokenTransaksi, } = req.params;
  try {
    const transaksi = await Transaction.findOne({
      where: { tokenTransaksi, },
    });
    res.status(200).json({
      transaksi: transaksi.totalPrice,
      Bank,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addTransaction = async (
  userId,
  orderId,
  totalPrice,
  trip,
  tokenTransaction
) => {
  try {
    const newTransaksi = await Transaction.create({
      userId,
      orderId,
      totalPrice,
      trip,
      tokenTransaction,
    });
    addHistory(userId, newTransaksi.id);

    return newTransaksi;
  } catch (error) {
    return error;
  }
};

const updateTransaction = async (req, res) => {
  try {
    const {
      bankName,
      accountName,
      accountNumber,
      tokenTransaction,
    } = req.body;
    const payman = addPayment(bankName, accountName, accountNumber);
    await Transaction.update({
      status: true,
      paymentId: payman.id,
    }, {
      where: {
        tokenTransaction,
      },
    });
    res.status(200).json({
      message: 'Selamat pembayaran berhasil dilakukan!',
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
  getTransactionByUser,
  getTransactionByToken,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
};
