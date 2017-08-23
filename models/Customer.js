var mongoose = require('mongoose');
var deviceSchema = require('./Device');
var noteSchema = require('./Note');
var optionSchema = require('./Options');

var customerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  company:{
    type: String
  },
   email: {
    type: String
  },
   address:{
    type: String
  },
   regcom:{
    type: String
  },
   cif:{
    type: String
  },
   iban1:{
    type: String
  },
   bank1:{
    type: String
  },
   iban2:{
    type: String
  },
   bank2:{
    type: String
  },
  status: {
    type: String,
    default: 'Open'
  },
  devices: [deviceSchema]
}, optionSchema);

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
