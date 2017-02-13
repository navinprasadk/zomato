

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
