'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChatSchema = new Schema({
  author: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model('Chat', ChatSchema);