const { Destination, Airport } = require('../models');
const imagekit = require('../../lib/imageKit');

const getDestination = async (req, res) => {
  try {
    const destinations = await Destination.findAll({
      include: [{ Airport }],
    });
    res.status(200).json({
      destinations,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await Destination.findOne({ where: { id } });
    res.status(200).json({
      flight,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addDestination = async (req, res) => {
  try {
    const { name, location, description, airportId } = req.body;
    const { files } = req;
    req.body.images = [];

    await Promise.all(
      // eslint-disable-next-line consistent-return
      files.map(async (file) => {
        const validFormat =
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg' ||
          file.mimetype === 'image/jpeg' ||
          file.mimetype === 'image/gif';
        if (!validFormat) {
          return res.status(400).json({
            status: 'failed',
            message: 'Wrong Image Format',
          });
        }
        // untuk dapat extension file nya
        const split = file.originalname.split('.');
        const ext = split[split.length - 1];

        // upload file ke imagekit
        const img = await imagekit.upload({
          file: file.buffer,
          fileName: `IMG-${Date.now()}.${ext}`,
        });

        req.body.images.push(img.url);
      })
    );

    const newDestination = await Destination.create({
      name,
      image: req.body.images,
      location,
      description,
      airportId,
    });
    res.status(200).json({
      message: 'data berhasil ditambahkan',
      newDestination,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, description, airportId } = req.body;
    const { files } = req;
    req.body.images = [];

    await Promise.all(
      // eslint-disable-next-line consistent-return
      files.map(async (file) => {
        const validFormat =
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg' ||
          file.mimetype === 'image/jpeg' ||
          file.mimetype === 'image/gif';
        if (!validFormat) {
          return res.status(400).json({
            status: 'failed',
            message: 'Wrong Image Format',
          });
        }
        // untuk dapat extension file nya
        const split = file.originalname.split('.');
        const ext = split[split.length - 1];

        // upload file ke imagekit
        const img = await imagekit.upload({
          file: file.buffer,
          fileName: `IMG-${Date.now()}.${ext}`,
        });

        req.body.images.push(img.url);
      })
    );
    await Destination.update(
      {
        name,
        image: req.body.images,
        location,
        description,
        airportId,
      },
      { where: { id } }
    );
    res.status(200).json({
      message: 'data berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;
    await Destination.delete({ where: { id } });
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
  getDestination,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination,
};
