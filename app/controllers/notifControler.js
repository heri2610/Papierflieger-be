const { notification, } = require('../models');

const getNotif = async (req, res) => {
  try {
		 	const id = req.user;
    const notifikasi = await notification.findAll({where: {userId:id,},});
    res.status(200).json({
	    notifikasi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateNotif = async (req, res) => {
  try {
    const {id,} = req.params;
				 await notification.update({ read:true, }
		   ,{where:{id,},});
    res.status(200).json({
      message: 'pemberitahuan sudah dibaca',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getNotif,
  updateNotif,
};
