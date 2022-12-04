const { Ticket, Airport, Airplane } = require('../models');

const getTicket = async (req, res) => {
  try {
    const dataTicket = await Ticket.findAll({
      include: [
        {
          model: Airplane,
        },
        {
          model: Airport,
          as: 'from',
        },
        {
          model: Airport,
          as: 'to',
        },
        {
          model: Airport,
          as: 'transit',
        },
      ],
    });
    res.status(200).json({
      dataTicket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
// eslint-disable-next-line consistent-return
const searchTicket = async (req, res) => {
  const { dari, tujuan, tanggalBerangkat, tanggalPulang } = req.query;
  try {
    const tiketBerangkat = await Ticket.findAll(
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
            where: { airportName: dari },
          },
          {
            model: Airport,
            as: 'to',
            where: { airportName: tujuan },
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      },
      { where: { departureDate: tanggalBerangkat } }
    );
    if (!tanggalPulang) {
      return res.status(200).json({
        message: 'tiket hasil pencarian',
        tiketBerangkat,
      });
    }
    const tiketPulang = await Ticket.findAll(
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
            where: { airportName: dari },
          },
          {
            model: Airport,
            as: 'to',
            where: { airportName: tujuan },
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      },
      { where: { departureDate: tanggalBerangkat } }
    );
    res.status(200).json({
      message: 'tiket hasil pencarian',
      tiketBerangkat,
      tiketPulang,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findOne(
      {
        include: [
          {
            model: Airplane,
          },
          {
            model: Airport,
            as: 'from',
          },
          {
            model: Airport,
            as: 'to',
          },
          {
            model: Airport,
            as: 'transit',
          },
        ],
      },
      {
        where: { id },
      }
    );
    res.status(200).json({
      ticket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const addTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(200).json({
      message: 'tiket berhasil ditambahkan',
      newTicket,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.update(req.body, { where: { id } });
    res.status(200).json({
      message: 'tiket berhasil diubah',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.destroy({ where: { id } });
    res.status(200).json({
      message: 'tiket berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTicket,
  searchTicket,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
};
