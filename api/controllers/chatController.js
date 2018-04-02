'use strict';

var mongoose = require('mongoose'),
  Chat = mongoose.model('Chat');

exports.list_all_messages = function(req, res) {
  Chat.find({}, function(err, chat) {
    if (err)
      res.send(err);
    res.json(chat);
  });
};


exports.create_a_message = function(req, res) {
  var new_chat = new Chat(req.body);
  new_chat.save(function(err, chat) {
    if (err)
      res.send(err);
    res.json(chat);
  });
};
