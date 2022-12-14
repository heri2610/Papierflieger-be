const { notification, } = require('../models');

const postNotif = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, message, } = req.body;

    const notifikasi = await notification.create({ userId, name, message, });
    res.status(201).json({
      notifikasi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getNotif = async (req, res) => {
  try {
    const userId = req.user.id;
    const notifikasi = await notification.findAll({
      where: { userId, },
      order: [['createdAt', 'DESC',],],
    });

    res.status(200).json({
      message: 'Menampilkan semua notifikasi',
      notifikasi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateNotifById = async (req, res) => {
  try {
    const { id, } = req.params;
    await notification.update({
      read: true,
    }, {
      where: { id, },
    });
    res.status(200).json({
      message: 'pesan telah dibaca',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const updateNotif = async (req, res) => {
  try {
    const { id, } = req.user;
    await notification.update({
      read: true,
    }, {
      where: { userId: id, },
    });
    res.status(200).json({
      message: 'pesan telah dibaca',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  postNotif,
  getNotif,
  updateNotif,
  updateNotifById,
};
