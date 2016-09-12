var UserModel = require('../models/UserModel.js');

module.exports = {

    list: function (req, res) {
        UserModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            return res.json(Users);
        });
    },

    show: function (req, res) {
        var id = req.params.id;
        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }
            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }
            return res.json(User);
        });
    },

    create: function (req, res) {
        var User = new UserModel({
			name : req.body.name,
			gender : req.body.gender,
			dob : req.body.dob,
			contactNumber : req.body.contactNumber,
			houseNo : req.body.houseNo,
			street : req.body.street,
			locality : req.body.locality,
			city : req.body.city,
			state : req.body.state,
			pinCode : req.body.pinCode
        });

        User.save(function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }
            return res.status(201).json(User);
        });
    },

    update: function (req, res) {
        var id = req.params.id;
        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }
            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.name = req.body.name ? req.body.name : User.name;
			User.gender = req.body.gender ? req.body.gender : User.gender;
			User.dob = req.body.dob ? req.body.dob : User.dob;
			User.contactNumber = req.body.contactNumber ? req.body.contactNumber : User.contactNumber;
			User.houseNo = req.body.houseNo ? req.body.houseNo : User.houseNo;
			User.street = req.body.street ? req.body.street : User.street;
			User.locality = req.body.locality ? req.body.locality : User.locality;
			User.city = req.body.city ? req.body.city : User.city;
			User.state = req.body.state ? req.body.state : User.state;
			User.pinCode = req.body.pinCode ? req.body.pinCode : User.pinCode;
			
            User.save(function (err, User) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;
        UserModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
