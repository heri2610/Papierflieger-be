const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const router = require('./app/router');
// const { MORGAN_FORMAT } = require('../config/application');

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


module.exports = app;
