var async = require('async');
var moment = require('moment');
var request = require('request');
var qs = require('querystring');
var Customer = require('../models/Customer');
var ObjectId = require('mongoose').Types.ObjectId;


  exports.notePut = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
      Customer.devices.id(req.params.did).notes.push({
        note: req.body.note,
        status: req.body.status
      });
      var subdoc = Customer.devices.id(req.params.did).notes[0];
      console.log(subdoc);
      subdoc.isNew;
      Customer.save(function(err) {
        if(err) console.log(err);
        console.log( `${req.body.device} + inserted in ${Customer.name}`);
        res.json(Customer.devices.id(req.params.did).notes);
      });
    });
  };
  exports.noteGet = function(req, res, next) {
    Customer.findById(req.params.id, function(err, Customer) {
      res.json(Customer.devices.id(req.params.did).notes);
    });
  };
