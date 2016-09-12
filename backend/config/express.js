'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';

module.exports = function (app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (env === 'development') {
    app.locals.pretty = true;
    app.locals.compileDebug = true;
    app.use(morgan('dev'));
  }
};
