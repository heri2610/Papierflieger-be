const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./app/router');

const app = express();

app.use(morgan('common'));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
