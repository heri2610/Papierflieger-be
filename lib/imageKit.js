const ImageKit = require('imagekit');
const dotenv = require('dotenv');

dotenv.config();
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

module.exports = imagekit;

//  untuk upload k imagge kitnya nnt
//   const validFormat =
//     file.mimetype == 'image/png' ||
//     file.mimetype == 'image/jpg' ||
//     file.mimetype == 'image/jpeg' ||
//     file.mimetype == 'image/gif';
//   if (!validFormat) {
//     return res.status(400).json({
//       status: 'failed',
//       message: 'Wrong Image Format',
//     });
//   }

//   // untuk dapat extension file nya
//   const split = file.originalname.split('.');
//   const ext = split[split.length - 1];

//   // upload file ke imagekit
//   const img = await imagekit.upload({
//     file: file.buffer, //required
//     fileName: `IMG-${Date.now()}.${ext}`, //required
//   });
