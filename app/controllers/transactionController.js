/* eslint-disable max-len */
const { Transaction, Order, Ticket, Payment, Users, notification, } = require('../models');
const { addHistory, } = require('./historyController');
const { addPayment, getPaymentByNoRek, } = require('./paymentController');
const sendMail = require('../../lib/nodemailer');

const getTransactionByUser = async (req, res) => {
  try {
    const { id, } = req.params;
    const transaksi = await Transaction.findOne(
      {
        where: { userid: id, },
        order: [['createdAt', 'DESC',],],
        include: [
          {
            model: Order,
            include: [
              {
                model: Ticket,
              },
            ],
          },
        ],
      }
    );
    res.status(200).json({
      transaksi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const getTransaction = async (req, res) => {
  try {
    const transaksi = await Transaction.findAll(
      {
        order: [['createdAt', 'DESC',],],
        include: [{ model: Payment, }, { model: Users, },],
      }
    );
    res.status(200).json({
      transaksi,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const getTransactionByToken = async (req, res) => {
  const Bank = [
    { bankName: 'Mandiri', accountNumber: 2504253627, },
    { bankName: 'BRI', accountNumber: 1508384772, },
    { bankName: 'BTN', accountNumber: 134565672, },
    { bankName: 'BCA', accountNumber: 13487643, },
  ];
  const { tokenTransaksi, } = req.params;
  try {
    const transaksi = await Transaction.findOne({
      where: { tokenTransaksi, },
    });
    res.status(200).json({
      transaksi: transaksi.totalPrice,
      Bank,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};
const addTransaction = async (
  userId,
  orderId,
  totalPrice,
  trip,
  tokenTransaction
) => {
  try {
    const newTransaksi = await Transaction.create({
      userId,
      orderId,
      totalPrice,
      trip,
      tokenTransaction,
    });
    addHistory(userId, newTransaksi.id);

    return newTransaksi;
  } catch (error) {
    return error;
  }
};

const updateTransaction = async (req, res) => {
  const userId = req.user.id;
  try {
    const {
      bankName,
      accountName,
      accountNumber,
      tokenTransaction,
    } = req.body;
    const payman = await addPayment(bankName, accountName, accountNumber);
    const existPayment = await getPaymentByNoRek(accountNumber);
    await Transaction.update({
      status: true,
      paymentId: payman.id || existPayment.id,
    }, {
      where: {
        tokenTransaction,
      },
    });

    const transaksi = await Transaction.findOne({
      where: { tokenTransaction, },
    });

    const data = {
      name: 'Booking Tiket Berhasil',
      message: `Pembayaran atas nama ${accountName} dengan nomor rekening ${accountNumber} telah berhasil, terimakasih telah menggunakan layanan kami untuk perjalanan Anda`,
      userId,
    };
    await notification.create(data);

    const userEmail = req.user.email;
    const namaPenerima = req.user.fullName;
    const kodeTransaksi = tokenTransaction.split('-')[0].toUpperCase();
    const formatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', });
    const tglBayar = new Date();

    const email = {
      EMAIL: userEmail,
      subject: `Bukti Pembayaran Transaksi PT. Papierflieger (${kodeTransaksi})`,
      text: 'hello word',
      html:
        `<!DOCTYPE html>
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
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
      
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
          }
      
          body,
          table,
          td,
          a {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
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
      
          .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            background-color: #ebecf0;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            border: 1px solid #777;
            border-radius: 10px;
            margin: 0 24px;
          }
      
          .grid-item1 {
            font-size: 12px;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            width: 49%;
            font-weight: 600;
          }
      
          .grid-item2 {
            font-size: 12px;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            width: 50%;
          }
        </style>
      </head>
      
      <body style="background-color: #ffffff;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <!-- start logo -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" valign="top" style="padding: 36px 24px;">
                    <a href="https://papierflieger.netlify.app/" target="_blank" style="display: inline-block;">
                      <img src="https://ik.imagekit.io/lscxjpnrv/logo_papierflieger.png" alt="Papierflieger" border="0"
                        width="64" style="display: block; width: 64px; max-width: 64px; min-width: 64px;">
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
                  <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; 
                    border-top: 3px solid #d4dadf;">
                    <h4 style="margin: 0; font-size: 14px; font-weight: 400;">Halo,
                      ${namaPenerima}!</h4>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end hero -->

          <!-- start copy block -->
          <tr>
            <td align="center" bgcolor="#e9ecef">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin-bottom: 32px;">
                <!-- start copy -->
                <tr>
                  <td align="left" bgcolor="#ffffff" style="padding: 10px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; 
                    font-size: 14px; line-height: 24px;">
                    <p style="margin: 0;"><strong>Pemesanan tiket pesawat kamu berhasil dibayar</strong></p>
                    <p>Berikut detail pemesanan tiket kamu :</p>
                  </td>
                </tr>
                <!-- end copy -->
      
                <!-- start button -->
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <div class="grid-container">
                      <div class="grid-item1">
                        <p>Total Bayar</p>
                        <p>Pembayaran Melalui</p>
                        <p>Pemilik Rekening</p>
                        <p>Kode Transaksi</p>
                        <p>Waktu Pembayaran</p>
                      </div>
                      <div class="grid-item2" align="right">
                        <p>${formatter.format(transaksi.totalPrice)}</p>
                        <p>${bankName}</p>
                        <p>${accountName}</p>
                        <p>${kodeTransaksi}</p>
                        <p>${tglBayar.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', })}</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- end button -->
      
                <!-- start copy -->
                <tr>
                  <td align="left" bgcolor="#ffffff"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                    <p style="margin: 0;">Tidak Termasuk PPN.<br />
                      PPN dibebaskan berdasarkan pasal 16B Undang Undang Harmonisasi Peraturan Perpajakan
                    </p>
                  </td>
                </tr>
                <!-- end copy -->
              </table>
            </td>
          </tr>
          <!-- end copy block -->
      
          <!-- start footer -->
          <tr>
            <td align="center" bgcolor="#0060c2" style="padding: 24px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                  <td align="center" bgcolor="#0060c2" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; 
                    font-size: 14px; line-height: 20px; color: #fff;">
                    <p style="margin: 0;">E-mail ini dibuat otomatis, mohon untuk tidak membalas. Jika ada pertanyaan atau
                      membutuhkan bantuan silahkan hubungi contact center.</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" bgcolor="#0060c2" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; 
                    font-size: 14px; line-height: 20px; color: #fff;">
                    <p style="margin: 0;">© PT Papierflieger</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>`,
    };
    sendMail(email);

    res.status(200).json({
      message: 'Selamat pembayaran berhasil dilakukan!',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id, } = req.params;
    await Transaction.destroy({ where: { id, }, });
    res.status(200).json({
      message: 'data berhasil dihapus',
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTransactionByUser,
  getTransactionByToken,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransaction,
};