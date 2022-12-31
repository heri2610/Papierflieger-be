const { aboutUs,Users,Order,Transaction, notification, } = require('../models');

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
const dashboardAdmin = async ( req, res)=>{ 
  try {
    const countUsers = await Users.count();
    const countTransactions = await Transaction.count();
    const countOrders = await Order.count();
    const transactionsLates = await Transaction.findAll({
      limit: 10,
      order: [
        ['updatedAt', 'DESC',],
      ],
    });
    res.status(200).json({
      count:{
        countUsers,
        countTransactions,
        countOrders,
      },
      transactionsLates,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const notifCount = async ( req, res)=>{ 
  try {
    const countNotif = await notification.count();
    res.status(200).json({
      countNotif,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { getAboutUs, dashboardAdmin,notifCount,};
