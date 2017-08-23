var mongoose = require('mongoose');
var noteSchema = require('./Note');
var optionSchema = require('./Options');

var deviceSchema = new mongoose.Schema({
  device: {
    type: String
  },
  model: {
    type: String
  },
  imei: {
    type: String
  },
  defects: {
    type: String
  },
  unspecified: {
    type: String
  },
  observations: {
    type: String
  },
  status: {
    type: String,
    default: 'Primit in service'
  },
  printable: {
    type: Number,
    default: 0
  },
  notes: [noteSchema]
}, optionSchema);

module.exports = deviceSchema;
