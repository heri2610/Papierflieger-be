const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const router = require('./app/router');
// const { MORGAN_FORMAT } = require('../config/application');
const { PORT = 3000 } = process.env;

const app = express();

// app.use(morgan(MORGAN_FORMAT));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
