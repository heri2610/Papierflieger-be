const { Op, } = require('sequelize');
const ApiError = require('../../utils/ApiError');
const { Wishlist, Destination, } = require('../models');

const getWishlist = async (req, res) => {
  const userId = req.user.id;
  try {
    const wishlist = await Wishlist.findAll({
      where: { userId, },
      include: [
        {
          model: Destination,
        },
      ],
    });
    res.status(200).json({
      wishlist,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { destinationId, } = req.body;

    const destination = await Destination.findOne({
      where: { id: destinationId, },
    });
    if (!destination) throw new ApiError(404, 'destinationId is not found');

    const exist = await Wishlist.findOne({
      where: {
        [Op.and]: [{ userId, }, { destinationId, },],
      },
    });
    if (exist) throw new ApiError(400, 'Destinasi telah ada dalam wishlist');

    const newWishlist = await Wishlist.create({ userId, destinationId, });
    res.status(200).json({
      message: 'Berhasil menambahkan destinasi ke dalam wishlist',
      newWishlist,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { destinationId, } = req.params;

    const destination = await Destination.findOne({
      where: { id: destinationId, },
    });
    if (!destination) throw new ApiError(404, 'destinationId is not found');

    await Wishlist.destroy({
      where: {
        [Op.and]: [{ userId, }, { destinationId, },],
      },
    });
    res.status(200).json({
      message: 'Berhasil menghapus destinasi dari wishlist',
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
