const { Payment, } = require('../models');

const getPayment = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json({
      message: 'metode pembayaran',
      payments,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { id, } = req.params;
    const payments = await Payment.findOne({ where: { id, }, });
    res.status(200).json({
      payments,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getPaymentByNoRek = async (noRek) => {
  try {
    const detail = await Payment.findOne({ where: { accountNumber: noRek, }, });
    return detail;
  } catch (error) {
    return error;
  }
};

const addPayment = async (bankName, accountName, accountNumber) => {
  try {
    const newPayment = await Payment.create({
      bankName,
      accountName,
      accountNumber,
    });
    return newPayment;
  } catch (error) {
    return false;
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id, } = req.params;
    await Payment.update(req.body, { where: { id, }, });
    res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id, } = req.params;
    await Payment.destroy({ where: { id, }, });
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
  getPayment,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
  getPaymentByNoRek,
};
