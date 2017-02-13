// let router = require('express').Router();
// let bodyParser = require('body-parser');
// let user = require('userEntity');
// router.use(bodyParser.json());
// // add a user
// router.post('/add',(req,res) => {
//   logger.debug("Inside user post");
//   let dt = new mydb({
//         text: req.body.name
//     });
//     dtab.save().then((doc) => {
//         res.send(doc);
//         res.send("Added successfully");
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });
// // find a user
// router.get('/find/:id',(req,res) => {
//   logger.debug("Inside user find");
//   let id = req.params.id;
//   mydb.findById(id).then((doc) => {
//     res.send(doc);
//   },(e) => {
//       res.status(400).send(e);
//   });
// });
//
// router.patch()

var User = require('./userEntity');

var userController = {
      add : function(req, res){
              	let db= new userModel(req.body);
              	db.save();
              	res.send("Added successfully");
              },
      find :function(req, res) {
         userModel.findOne(req.body, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send("correct");
           }
           else{
             res.send("incorrect");
           }
         });
      },
      update :function(req, res) {
         userModel.update(req.body.old, req.body.new, function(err,docs){
           if(err){
             res.send("Error:"+err);
           }
           else if(docs!=null){
             res.send("changed");
           }
           else{
             res.send("not changed");
           }
         });

}
}
module.exports = userController;
