console.log('FROM USERS CONTROLLER JS:');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
// INDEX: SHOW
  index: function(req,res){
    Friend.find({}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'index'});
  },
// CREATE:
  create: function(req,res){
    // console.log('data: ', req.body)
    var new_user = new Friend({first_name:req.body.first, last_name: req.body.last, birthday: req.body.date});
    new_user.save(function(err,userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'create'});
  },
// UPDATE:
  update: function(req,res){
    //your code here
    res.json({placeholder:'update'});
  },
// DELETE:
  delete: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    var current_user = Friend.findOne({ _id: req.params.id });
    // console.log('CONTROLLER JS: ', current_user)
    current_user.remove(function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'delete'});
  },
// SHOW:
  show: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    Friend.find({ _id: req.params.id }, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'show'});
  }
}
