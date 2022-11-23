const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendMail = require('../../lib/nodemailer');
const { users, verify } = require('../models');
const ApiError = require('../../utils/ApiError');
const isEmailValid = require('../../utils/emailValidation');

const tokenVerify = uuidv4();
dotenv.config();

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
        message: 'Login success',
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
      fullName,
      username,
      email,
      password,
      phone,
      birthdate,
      nationality,
      country,
      province,
      regency,
    } = req.body;

    const User = await users.findOne({ where: { email } });
    const usernameExist = await users.findOne({ where: { username } });
    // validasi
    const validateEmail = isEmailValid(email);
    if (!email) throw new ApiError(400, 'Email cannot be empty');
    if (!validateEmail)
      throw new ApiError(400, 'Please enter a valid email address');
    if (!password) throw new ApiError(400, 'Password cannot be empty');
    if (!fullName) throw new ApiError(400, 'Name cannot be empty');
    if (!username) throw new ApiError(400, 'Username cannot be empty');
    if (User) throw new ApiError(400, 'Email is already exist!');
    if (usernameExist) throw new ApiError(400, 'Username is already taken');
    if (password.length < 8)
      throw new ApiError(
        400,
        'Minimum password length must be 8 charater or more'
      );

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // buat user baru
    const newUser = await users.create({
      title,
      fullName,
      username,
      email,
      password: hashedPassword,
      phone,
      birthdate,
      nationality,
      country,
      province,
      regency,
    });

    // email verify
    const date = Date.now() + 1000 * 60 * 60 * 24;
    await verify.create({ userId: newUser.id, tokenVerify, expired: date });
    const data = {
      EMAIL: email,
      subject: 'Testing Email',
      text: 'hello word',
      html: `${process.env.URLSENDEMAIL}?token=${tokenVerify}`,
    };
    sendMail(data);

    res.status(200).json({
      message:
        'Registration successful. Please check inbox to verify your account.',
      newUser,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const verified = async (req, res) => {
  try {
    const urlToken = req.query.token;
    const cekToken = await verify.findOne({ where: { tokenVerify: urlToken } });
    const ExpiredDate = cekToken.expired;
    const dateNow = Date.now();
    if (dateNow >= ExpiredDate) {
      throw new ApiError(400, 'Expired token');
    }
    const userVerify = await users.update(
      { verified: true },
      {
        where: {
          id: cekToken.userId,
        },
      }
    );
    res.status(200).json({
      message: 'Account verified successfully',
      userVerify: userVerify.verified,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { login, register, verified };
