'use strict';

const users = require('../app/routes/UserRoutes');

module.exports = function (app) {
  app.use('/users', users);
};
