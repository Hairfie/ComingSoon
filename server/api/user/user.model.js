'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  hairdresser: Boolean,
  pro: Boolean,
  salon: Boolean,
  gender : { type: String, upper: true, match: /[MmFf]/ }
});

module.exports = mongoose.model('User', UserSchema);