const { Wishlist } = require('../models');

const getWishlist = async (req, res) => {
  try {
    const dataAirplane = await Wishlist.findAll();
    res.status(200).json({
      message: 'data pesawat',
      dataAirplane,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addWishlist = async (req, res) => {
  try {
    const newFlight = await Wishlist.create(req.body);
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      newFlight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await Wishlist.destroy({ where: { id } });
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
  getWishlist,
  addWishlist,
  deleteWishlist,
};
