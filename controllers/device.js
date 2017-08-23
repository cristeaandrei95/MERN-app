var async = require('async');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');
var Customer = require('../models/Customer');
var ObjectId = require('mongoose').Types.ObjectId;

exports.deviceIdGet = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
        res.json(Customer.devices.id(req.params.did));
    });
};
exports.devicesGet = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
        res.json(Customer.devices);
    });
};
exports.devicePost = function(req, res, next) {
    Customer.findOne({
        _id: ObjectId(req.params.id)
    }, function(err, Customer) {
        Customer.devices.push({
            device: req.body.device,
            model: req.body.model,
            imei: req.body.imei,
            defects: req.body.defects,
	    unspecified: req.body.unspecified,
	    observations: req.body.observations,
            status: req.body.status,
            printable: 0
            });
        var subdoc = Customer.devices[0];
        console.log(subdoc);
        subdoc.isNew;
        Customer.save(function(err) {
            if (err)
                console.log(err);
            console.log(`${req.body.device} + inserted in ${Customer.name}`);
            res.json(Customer);
        });
    });
};

exports.devicePrint = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
        res.json(Customer.devices.id(req.params.did).printable);
    });
};

exports.devicePrinting = function(req, res, next) {

  Customer.update(
      { "_id": ObjectId(req.params.id), "devices._id": ObjectId(req.params.did) },
      {
          "$set": {
              "devices.$.printable": req.body.printable
          }
      },
      function(err,doc) {
        res.json(doc);
      }
  );






  // Customer.findByIdAndUpdate(req.params.id, function(err, Customer) {
  //   Customer.devices.id(req.params.did).printable === req.body
  //   var subdoc = Customer.devices.id(req.params.did);
  //   console.log(subdoc);
  //   subdoc.isNew;
  //   Customer.save(function(err) {
  //     if(err) console.log(err);
  //     console.log( `${req.body.device} + inserted in ${Customer.name}`);
  //     res.json(Customer.devices.id(req.params.did).printable);
  //   });
  // });




};
