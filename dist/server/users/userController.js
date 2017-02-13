//
//
// var User = require('./userEntity');
//
// var userController = {
//       add : function(req, res){
//               	let db= new userModel(req.body);
//               	db.save();
//               	res.send("Added successfully");
//               },
//       find :function(req, res) {
//          userModel.findOne(req.body, function(err,docs){
//            if(err){
//              res.send("Error:"+err);
//            }
//            else if(docs!=null){
//              res.send("correct");
//            }
//            else{
//              res.send("incorrect");
//            }
//          });
//       },
//       update :function(req, res) {
//          userModel.update(req.body.old, req.body.new, function(err,docs){
//            if(err){
//              res.send("Error:"+err);
//            }
//            else if(docs!=null){
//              res.send("changed");
//            }
//            else{
//              res.send("not changed");
//            }
//          });
//
// }
// }
// module.exports = userController;


const logger = require('./../../applogger');
const User = require('./userEntity');

var userController = {
   addUser: function(req, res) {
       logger.debug("Inside user post");
       var newUser = new User({username: req.body.username, password: req.body.password});

       newUser.save().then((doc) => {
           res.send(doc);
       }, (err) => {
           console.log(err);
           res.send(err);
       });
   },

   updateUser: function(req, res) {
       var id = req.params.id;
       User.findByIdAndUpdate(id, {
           $set: {
               password: req.body.password
           }
       }, {new: true}).then((docs) => {
           res.send(docs);
       }, (err) => {
           res.send(err);
       });
   },

   deleteUser: function(req, res) {
       var id = req.params.id;
       User.findByIdAndRemove(id).then((docs) => {
           res.send({docs});
       }, (err) => {
           res.send(err);
       });
   },

   getUser: function(req, res) {
       User.find().then((docs) => {
           res.send(docs);
       }, (err) => {
           res.send('Cant get the docs', err);
       });
   },

   login: function(req, res) {
      res.json({responseText:'authenticated'});
   },

   logout: function(req, res){
     console.log('Session deleted');
     req.session.destroy();
     res.send({redirect: '/'});
   }
};

module.exports = userController;
