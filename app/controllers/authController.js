const dotenv = require('dotenv');
const { v4: uuidv4, } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const imageKit = require('../../lib/imageKit');
const sendMail = require('../../lib/nodemailer');
const { Users, Verify, } = require('../models');
const ApiError = require('../../utils/ApiError');
const isEmailValid = require('../../utils/emailValidation');

const tokenVerify = uuidv4();
dotenv.config();

const login = async (req, res) => {
  try {
    const { email = '', password = '', } = req.body;
    const user = await Users.findOne({ where: { email, }, });
    // validasi
    if (!user) throw new ApiError(400, 'Email tidak terdaftar.');
    if (!bcrypt.compareSync(password, user.password)) {
      throw new ApiError(400, 'Password salah.');
    }

    const verifikasi = user.verified;
    if (!verifikasi) throw new ApiError(400, 'email belum terverifikasi');
    if (bcrypt.compareSync(password, user.password)) {
      // generate token utk user yg success login
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY
      );
      res.status(200).json({
        message: 'Login berhasil.',
        token,
        username: user.username,
        avatar: user.avatar,
        role: user.role,
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

    const User = await Users.findOne({ where: { email, }, });
    const usernameExist = await Users.findOne({ where: { username, }, });
    // validasi
    const validateEmail = isEmailValid(email);
    if (!email) throw new ApiError(400, 'Email tidak boleh kosong.');
    if (!validateEmail) throw new ApiError(400, 'Email tidak valid.');
    if (!password) throw new ApiError(400, 'Password tidak boleh kosong.');
    if (!fullName) throw new ApiError(400, 'Nama tidak boleh kosong.');
    if (!username) throw new ApiError(400, 'Username tidak boleh kosong.');
    if (User) throw new ApiError(400, 'Email telah terdaftar.');
    if (usernameExist) throw new ApiError(400, 'Username telah digunakan.');
    if (password.length < 8) {
      throw new ApiError(400, 'Masukkan password minimal 8 karakter');
    }
    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // buat user baru
    const newUser = await Users.create({
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
    const token = `${tokenVerify}${Date.now()}`;
    const TokenVerify = await Verify.create({
      userId: newUser.id,
      tokenVerify: token,
      expiredAt: date,
    });
    const data = {
      EMAIL: email,
      subject: 'Email Verification',
      text: 'hello word',
      html: `${process.env.URLSENDEMAIL}?token=${token}`,
    };
    sendMail(data);

    res.status(200).json({
      message:
        'Registrasi berhasil. Silakan cek email dan verifikasi akun untuk melanjutkan.',
      newUser,
      tokenVerifikasi: TokenVerify.tokenVerify,
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
    const cekToken = await Verify.findOne({
      where: { tokenVerify: urlToken, },
    });
    const ExpiredDate = cekToken.expiredAt;
    const dateNow = Date.now();
    if (dateNow >= ExpiredDate) {
      throw new ApiError(400, 'Expired token');
    }
    const userVerify = await Users.update(
      { verified: true, },
      {
        where: {
          id: cekToken.userId,
        },
      }
    );
    res.status(200).json({
      message: 'Akun Anda berhasil diverifikasi.',
      userVerify: userVerify.verified,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// eslint-disable-next-line consistent-return
const updateProfile = async (req, res) => {
  const { id, } = req.user;
  const { file, } = req;
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
  try {
    const user = await Users.findOne({ where: { email, }, });
    if (user.email !== email) throw new ApiError(400, 'Email tidak boleh Diganti.');
    if (password) throw new ApiError(400, 'Password tidak boleh Diganti.');
    if (!fullName) throw new ApiError(400, 'Nama tidak boleh kosong.');
    if (!username) throw new ApiError(400, 'Username tidak boleh kosong.');

    if (file) {
      const validFormat =
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/gif';
      if (!validFormat) {
        res.status(400).json({
          status: 'failed',
          message: 'Wrong Image Format',
        });
      }
      const split = file.originalname.split('.');
      const ext = split[split.length - 1];

      // upload file ke imagekit
      const img = await imageKit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${ext}`,
      });

      await Users.update(
        {
          avatar: img.url,
        },
        {
          where: {
            id,
          },
        }
      );
    }
    if (req.body) {
      await Users.update({
        title,
        fullName,
        username,
        phone,
        birthdate,
        nationality,
        country,
        province,
        regency,
      },
      {
        where: {
          id,
        },
      });
    }
    res.status(200).json({
      message: 'Update profil berhasil.',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  const { id, } = req.user;
  try {
    const profile = await Users.findOne({ where: { id, }, });
    res.status(200).json({
      profile,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { login, register, verified, updateProfile, getProfile, };
