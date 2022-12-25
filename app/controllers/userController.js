const { Users, } = require('../models');
const ApiError = require('../../utils/ApiError');

const getUser = async(req, res)=>{
  try {
    const users = await Users.finAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addAdmin = async(req, res)=>{
  const {id,} = req.params; 
  try {
    const user = await Users.findOne({where:{id,},});
    if(!user) throw new ApiError(404, `user dengan id ${id} tidak ada`);
    await Users.update({role:'Admin',}, {where:{id,},});
    res.status(200).json({
      message: `${user.username} berhasil dijadikan admin`,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { getUser, addAdmin,};