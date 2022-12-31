/* eslint-disable max-len */
const dotenv = require('dotenv');
const { v4: uuidv4, } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const imageKit = require('../../lib/imageKit');
const sendMail = require('../../lib/nodemailer');
const { Users, Verify, notification, } = require('../models');
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
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Email Confirmation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
        @media screen {
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);
          }
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 700;
            src: url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);
          }
        }
        body,
        table,
        td,
        a {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        table,
        td {
          mso-table-rspace: 0pt;
          mso-table-lspace: 0pt;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
        a[x-apple-data-detectors] {
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          color: inherit !important;
          text-decoration: none !important;
        }
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
        body {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        table {
          border-collapse: collapse !important;
        }
        a {
          color: #1a82e2;
        }
        img {
          height: auto;
          line-height: 100%;
          text-decoration: none;
          border: 0;
          outline: none;
        }
        </style>
      
      </head>
      <body style="background-color: #e9ecef;"><!-- start body -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
      
          <!-- start logo -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" valign="top" style="padding: 36px 24px;">
                    <a href="https://papierflieger.netlify.app/" target="_blank" style="display: inline-block;">
                      <img src="https://ik.imagekit.io/lscxjpnrv/logo_papierflieger.png" alt="Papierflieger" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end logo -->
      
          <!-- start hero -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end hero -->
      
          <!-- start copy block -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
      
                <!-- start copy -->
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't create an account with <a href="https://papierflieger.netlify.app">Papierflieger</a>, you can safely delete this email.</p>
                  </td>
                </tr>
                <!-- end copy -->
      
                <!-- start button -->
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                                <a href="${process.env.URLSENDEMAIL}?token=${token}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Verification Account</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end button -->
      
                <!-- start copy -->
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                    <p style="margin: 0;">regards,<br> Papierflieger</p>
                  </td>
                </tr>
                <!-- end copy -->
      
              </table>
            </td>
          </tr>
          <!-- end copy block -->
      
          <!-- start footer -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
      
                <!-- start permission -->
                <tr>
                  <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0;">You received this email because we received a request for registration for your account. If you didn't request registration you can safely delete this email.</p>
                  </td>
                </tr>
                <!-- end permission -->
      
                <!-- start unsubscribe -->
                <tr>
                  <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                    <p style="margin: 0;">© Papierflieger</p>
                  </td>
                </tr>
                <!-- end unsubscribe -->
      
              </table>
            </td>
          </tr>
          <!-- end footer -->
      
        </table>
        <!-- end body -->
      
      </body>
      </html>
      `,
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
    await Users.update(
      { verified: true, },
      {
        where: {
          id: cekToken.userId,
        },
      }
    );
    // res.status(200).json({
    //   message: 'Akun Anda berhasil diverifikasi.',
    //   userVerify: userVerify.verified,
    // });
    await notification.create({ 
      name:'Verifikasi Email',
      message: 'akun anda berhasil di verifikasi, nkmati berbagai layanan yang telah kami sediakan',
    });
    res.status(200).redirect(`${process.env.VERIF_EMAIL}?message=Akun%20berhasil%20diverifikasi`);
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
    // const user = await Users.findOne({ where: { id, }, });
    if (email) throw new ApiError(400, 'Email tidak boleh Diganti.');
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
      }, {
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
