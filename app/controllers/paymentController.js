const { Payment } = require('../models');

const getPayment = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json({
      message: 'data metode pembayaran',
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
    const { id } = req.params;
    const payments = await Payment.findOne({ where: { id } });
    res.status(200).json({
      payments,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addPayment = async (req, res) => {
  try {
    const newPayment = await Payment.create(req.body);
    res.status(200).json({
      message: 'Berhasil menambahkan metode pembayaran.',
      newPayment,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await Payment.update(req.body, { where: { id } });
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
    const { id } = req.params;
    await Payment.destroy({ where: { id } });
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
};
