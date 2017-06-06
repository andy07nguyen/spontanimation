console.log('FROM FRIENDS MODELS JS:');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthday: String
});

mongoose.model('Friend', FriendSchema);
