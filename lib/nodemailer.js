const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
// const ApiError = require('../utils/ApiError');

dotenv.config();

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "72d1d2dbaef8b2",
    pass: "2a9792757432eb"
  }
});
const sendMail = (mail) => {
  const options = {
    from: '"Papierflieger" <no-reply@gmail.com>',
    to: mail.EMAIL,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  };
  transport.sendMail(options, (err, info) => {
    if (err){
      console.log("error",err)
      // throw new ApiError(400, 'Failed to send email');
    } else{
      console.log('pesan udh terkirim dong, cek emailnya');
    }
  });
};

module.exports = sendMail; 
