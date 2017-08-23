var mongoose = require('mongoose');
var optionSchema = require('./Options');

var noteSchema = new mongoose.Schema({
  note: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String
  }
}, optionSchema);

module.exports = noteSchema;
