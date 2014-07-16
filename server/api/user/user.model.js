'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  hairdresser: { type: Boolean, default: false },
  pro: { type: Boolean, default: false },
  salon: { type: Boolean, default: false },
  gender : { type: String, upper: true, match: /[MmFf]/ }
});

module.exports = mongoose.model('User', UserSchema);