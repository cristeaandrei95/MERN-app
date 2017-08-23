var async = require('async');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');
var Customer = require('../models/Customer');
var ObjectId = require('mongoose').Types.ObjectId;

exports.customersGet = function(req, res, next) {
    Customer.find({}, function(err, docs) {
        res.json(docs);
    });
};

exports.customerId = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
        res.json(Customer);
    });
};
exports.customerPost = function(req, res, next) {
    Customer.findOne({
        email: req.body.email
    }, function(err, user) {
        if (user) {
            return res.status(400).send({msg: 'Adresa de email a userului este deja folosita'});
        }
        let newCustomer = new Customer({
            name: req.body.name,
            company: req.body.company,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            regcom: req.body.regcom,
            cif: req.body.cif,
            iban1: req.body.iban1,
            bank1: req.body.bank1,
            iban2: req.body.iban2,
            bank2: req.body.bank2,
            status: req.body.status
        });
        newCustomer.save(function(err) {
            if (err)
                console.log(err);
            console.log(newCustomer);
            res.json(newCustomer);
        });
    });
};
