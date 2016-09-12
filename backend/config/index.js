'use strict';

const path = require('path');
const extend = require('util')._extend;

const development = require('./env/development');
const test = require('./env/test');

const defaults = {
  root: path.join(__dirname, '..'),
};

module.exports = {
  development: extend(development, defaults),
  test: extend(test, defaults),
}[process.env.NODE_ENV || 'development'];
