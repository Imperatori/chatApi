'use strict';
module.exports = function(app) {
  var chatList = require('../controllers/chatController');

  // chatList Routes
  app.route('/chat')
    .get(chatList.list_all_messages)
    .post(chatList.create_a_message);

};