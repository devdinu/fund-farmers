var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController.js');

router.get('/', function (req, res) {
    UserController.list(req, res);
});

router.get('/:id', function (req, res) {
    UserController.show(req, res);
});

router.post('/', function (req, res) {
    UserController.create(req, res);
});

router.put('/:id', function (req, res) {
    UserController.update(req, res);
});

router.delete('/:id', function (req, res) {
    UserController.remove(req, res);
});

module.exports = router;
