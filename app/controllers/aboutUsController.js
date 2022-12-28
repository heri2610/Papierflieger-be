const { aboutUs, } = require('../models');

const getAboutUs = async (req, res) => {
  try {
    const dataTim = await aboutUs.findAll();
    res.status(200).json({
      dataTim,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { getAboutUs, };
