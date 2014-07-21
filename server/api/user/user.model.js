'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamp');


var UserSchema = new Schema({
  email: String,
  hairdresser: { type: Boolean, default: false },
  pro: { type: Boolean, default: false },
  salon: { type: Boolean, default: false },
  gender : { type: String, upper: true, match: /[MmFf]/ }
});

UserSchema.plugin(timestamps);

module.exports = mongoose.model('User', UserSchema);