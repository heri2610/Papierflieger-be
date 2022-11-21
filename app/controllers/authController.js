const dotenv = require('dotenv');
// const { v4: uuidv4 } = require('uuid');
// const url = uuidv4();
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users } = require('../models');
const ApiError = require('../../utils/ApiError');

const login = async (req, res) => {
  try {
    const { email = '', password = '' } = req.body;
    const user = await users.findOne({ where: { email } });
    // validasi
    if (!user) throw new ApiError(400, 'email or password is wrong');
    if (!bcrypt.compareSync(password, user.password))
      throw new ApiError(400, 'email or password is wrong');

    if (bcrypt.compareSync(password, user.password)) {
      // generate token utk user yg success login
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY
      );
      res.status(200).json({
        message: 'Berhasil login',
        token,
      });
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      title,
      nationality,
      country,
      username,
      fullName,
      phone,
      province,
      password,
      birthdate,
      email,
      regency,
    } = req.body;
    const User = await users.findOne({ where: { email } });
    // validasi
    if (!email) throw new ApiError(400, 'email cannot be empty');
    if (!password) throw new ApiError(400, 'password cannot be empty');
    if (!fullName) throw new ApiError(400, 'name cannot be empty');
    if (!username) throw new ApiError(400, 'username cannot be empty');
    if (User) throw new ApiError(400, 'email already exist!');
    if (password.length < 8)
      throw new ApiError(
        400,
        'minimum password length must be 8 charater or more'
      );
    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await users.create({
      title,
      nationality,
      country,
      username,
      fullName,
      phone,
      province,
      password: hashedPassword,
      birthdate,
      email,
      regency,
    });
    res.status(200).json({
      message: 'registrasi berhasil, silahkan login',
      newUser,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
module.exports = { login, register };
