const { Users } = require('../app/models');

const isAdmin = async (req, res, next) => {
  try {
    const user = await Users.findByPk(req.user.id);
    if (user.role === 'Admin') return next();
    throw new Error();
  } catch (err) {
    res.status(403).json({
      status: 'failed',
      message: 'hanya bisa diakses oleh admin',
    });
  }
};
module.exports = isAdmin;
