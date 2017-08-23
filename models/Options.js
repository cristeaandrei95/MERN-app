var mongoose = require('mongoose');

var optionSchema = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

module.exports = optionSchema;
