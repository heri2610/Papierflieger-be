const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const ApiError = require('../utils/ApiError');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
const sendMail = (mail) => {
  const options = {
    from: '"Papier Flieger" <no-reply@gmail.com>',
    to: mail.EMAIL,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  };
  // eslint-disable-next-line no-unused-vars
  transporter.sendMail(options, (err, info) => {
    if (err) throw new ApiError(400, 'email gagal terkirim');
    console.log('pesan udh terkirim dong, cek emailnya');
  });
};

module.exports = sendMail;
